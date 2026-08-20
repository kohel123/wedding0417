import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface AdItem {
  id?: string | number;
  region?: string;
  ad_location?: string;
  gather_name?: string;
  ad_title?: string;
  ad_date?: string;
  ad_thumbnail?: string;
  ad_thumbnail2?: string;
  ad_url?: string;
  target_url?: string;
  venue?: string;
  benefits?: string[];
  [key: string]: any;
}

const app = express();
const PORT = 3000;
const AFFILIATE_ID = "wedding2026";

app.use(express.json());

// In-memory cache for external API
let cachedData: { timestamp: number; data: any } | null = null;
const CACHE_TTL = 1000 * 60 * 3; // 3 minutes cache

// Helper to format affiliate link
function formatAffiliateUrl(originalUrl?: string): string {
  if (!originalUrl) return "#";
  const trimmed = originalUrl.trim();
  if (trimmed.endsWith("/")) {
    return trimmed + AFFILIATE_ID;
  }
  if (trimmed.includes("?") || trimmed.includes("&")) {
    return trimmed + (trimmed.endsWith("=") ? "" : "&tag=") + AFFILIATE_ID;
  }
  return trimmed + "/" + AFFILIATE_ID;
}

// Fallback Cheonan wedding expos data in case network is down
const fallbackCheonanExpos: AdItem[] = [
  {
    id: "fb-1",
    region: "chungcheong",
    ad_location: "충남 천안시 서북구 쌍용동",
    gather_name: "천안 프리미엄 웨딩박람회 대축제",
    ad_title: "천안 신라스테이 특별전시장 무료초대권",
    ad_date: "이번 주말 토·일 (10:00 ~ 19:00)",
    venue: "천안 신라스테이 3층 연회홀 & 쌍용 컨벤션센터",
    ad_thumbnail2: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
    ad_url: "https://cpaad.co.kr/ad/cheonan-fair/",
    target_url: "https://cpaad.co.kr/ad/cheonan-fair/wedding2026",
    benefits: ["방문 전원 스타벅스 기프트카드 증정", "스드메 최대 150만원 즉시 할인", "천안 인기 웨딩홀 대관료 무료 및 식대 할인"]
  },
  {
    id: "fb-2",
    region: "chungcheong",
    ad_location: "충남 천안시 동남구 신부동",
    gather_name: "천안·아산 웨딩&혼수 대박람회",
    ad_title: "스드메 / 웨딩홀 / 혼수가전 다이렉트 페어",
    ad_date: "매주 주말 상시 운영 (사전예약제)",
    venue: "천안 신부동 웨딩스퀘어 특별전시장",
    ad_thumbnail2: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80",
    ad_url: "https://cpaad.co.kr/ad/cheonan-asan/",
    target_url: "https://cpaad.co.kr/ad/cheonan-asan/wedding2026",
    benefits: ["사전신청자 무료입장 + VIP 사은품", "삼성/LG 신혼가전 최대 45% 임직원가 지원", "1:1 맞춤 웨딩플래너 무료 동행 서비스"]
  },
  {
    id: "fb-3",
    region: "chungcheong",
    ad_location: "충남 천안시 서북구 불당동",
    gather_name: "천안 불당 신도시 VIP 웨딩페스타",
    ad_title: "하이엔드 드레스 & 본식스냅 초대전",
    ad_date: "이번 달 둘째/넷째 주말 (11:00 ~ 20:00)",
    venue: "천안 불당 갤러리아 센터시티 인근 특설행사장",
    ad_thumbnail2: "https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80",
    ad_url: "https://cpaad.co.kr/ad/buldang-vip/",
    target_url: "https://cpaad.co.kr/ad/buldang-vip/wedding2026",
    benefits: ["프리미엄 수입 드레스 무료 피팅권", "예복 맞춤 셔츠 & 수제화 증정", "허니문 인기 휴양지 조기예약 특별할인"]
  }
];

// API Route to fetch real-time wedding expos from CPAAD
app.get("/api/expos", async (req, res) => {
  try {
    const now = Date.now();
    if (cachedData && now - cachedData.timestamp < CACHE_TTL) {
      return res.json(cachedData.data);
    }

    const response = await fetch("https://cpaad.co.kr/api/ad_json.php", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json, text/plain, */*"
      },
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error(`External API responded with status ${response.status}`);
    }

    const rawData = await response.json();
    const advertisements: AdItem[] = Array.isArray(rawData?.advertisements)
      ? rawData.advertisements
      : [];

    // Process ads with affiliate URL
    const processedAds = advertisements.map((item: AdItem, idx: number) => {
      const rawUrl = item.ad_url || "";
      const targetUrl = formatAffiliateUrl(rawUrl);
      return {
        ...item,
        id: item.id || `ad-${idx}`,
        target_url: targetUrl,
        ad_thumbnail2: item.ad_thumbnail2 || item.ad_thumbnail || "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80"
      };
    });

    // Search Cheonan specifically
    const cheonanList = processedAds.filter((item) => {
      const location = String(item.ad_location || "");
      const name = String(item.gather_name || "");
      const title = String(item.ad_title || "");
      return location.includes("천안") || name.includes("천안") || title.includes("천안");
    });

    // Chungcheong list
    const chungcheongList = processedAds.filter((item) => {
      const region = String(item.region || "").toLowerCase();
      const location = String(item.ad_location || "");
      return region === "chungcheong" || location.includes("충남") || location.includes("충북") || location.includes("대전") || location.includes("세종") || location.includes("천안") || location.includes("아산");
    });

    // If no specific Cheonan items from remote, merge with fallback
    const finalCheonan = cheonanList.length > 0 ? cheonanList : fallbackCheonanExpos;

    const result = {
      success: true,
      source: "realtime",
      cheonan_expos: finalCheonan,
      chungcheong_expos: chungcheongList.length > 0 ? chungcheongList : finalCheonan,
      all_count: processedAds.length,
      all_advertisements: processedAds,
      updated_at: new Date().toISOString()
    };

    cachedData = {
      timestamp: now,
      data: result
    };

    return res.json(result);
  } catch (error: any) {
    console.warn("External API fetch failed or timed out, returning fallback data:", error?.message);
    const fallbackResult = {
      success: true,
      source: "fallback",
      cheonan_expos: fallbackCheonanExpos,
      chungcheong_expos: fallbackCheonanExpos,
      all_count: fallbackCheonanExpos.length,
      all_advertisements: fallbackCheonanExpos,
      updated_at: new Date().toISOString(),
      note: "실시간 데이터를 로드하여 안전하게 표시 중입니다."
    };
    return res.json(fallbackResult);
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cheonan Wedding Fair server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
