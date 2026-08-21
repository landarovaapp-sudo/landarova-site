const ASSET_LINKS = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.landarova.app",
      sha256_cert_fingerprints: [
        "F9:2C:03:8A:45:20:F1:C8:9A:23:5A:FF:18:1A:53:64:0F:93:78:36:0E:EF:10:E9:EC:18:1D:F1:F2:E0:44:5F",
      ],
    },
  },
];

interface Env {
  ASSETS: { fetch: typeof fetch };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/.well-known/assetlinks.json") {
      return new Response(JSON.stringify(ASSET_LINKS), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
