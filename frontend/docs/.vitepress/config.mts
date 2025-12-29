import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gwendolin Tan",
  description:
    "Gwendolin Tan is a Senior Product Manager at FWD with 10+ years of experience in product management, digital platforms, and strategic delivery. Explore her projects, experience, and professional journey.",
  lang: "en-US",
  head: [
    // Favicon
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/gwendolin-tan.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/gwendolin-tan.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/gwendolin-tan.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],

    // SEO Meta Tags
    ["meta", { name: "author", content: "Gwendolin Tan" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "googlebot", content: "index, follow" }],
    ["meta", { name: "theme-color", content: "#3b82f6" }],
    ["meta", { name: "msapplication-TileColor", content: "#3b82f6" }],

    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Gwendolin Tan" }],
    ["meta", { property: "og:title", content: "Gwendolin Tan" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Senior Product Manager at FWD with 10+ years of experience in product management, digital platforms, and strategic delivery.",
      },
    ],
    ["meta", { property: "og:image", content: "https://gwendolintan.com//gwendolin-tan.png" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { property: "og:image:alt", content: "Gwendolin Tan - Product Manager" }],
    ["meta", { property: "og:url", content: "https://gwendolintan.com" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Senior Product Manager at FWD with 10+ years of experience in product management, digital platforms, and strategic delivery.",
      },
    ],
    ["meta", { name: "twitter:image", content: "https://gwendolintan.com/me.webp" }],
    ["meta", { name: "twitter:image:alt", content: "Gwendolin Tan - Product Manager" }],

    // Additional SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "product manager, product management, digital platforms, strategic delivery, FWD, Lazada, Amadeus, VitePress, Vue.js, TypeScript, Singapore",
      },
    ],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
    ["meta", { name: "format-detection", content: "telephone=no" }],

    // Canonical URL
    ["link", { rel: "canonical", href: "https://gwendolintan.com" }],

    // DNS prefetch for external resources
    ["link", { rel: "dns-prefetch", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
    ["link", { rel: "dns-prefetch", href: "https://api.github.com" }],

    // Preconnect to external domains
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "preconnect", href: "https://www.google-analytics.com" }],
    ["link", { rel: "preconnect", href: "https://www.googletagmanager.com" }],
    ["link", { rel: "preconnect", href: "https://giscus.app" }],

    // Structured Data
    [
      "script",
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gwendolin Tan",
          jobTitle: "Senior Product Manager",
          worksFor: {
            "@type": "Organization",
            name: "Workato",
          },
          description:
            "Senior Product Manager at FWD with 10+ years of experience in product management, digital platforms, and strategic delivery.",
          url: "https://gwendolintan.com",
          image: "https://gwendolintan.com/me.webp",
          sameAs: ["https://www.linkedin.com/in/gwendolintan", "https://github.com/moriatea"],
          knowsAbout: [
            "Product Management",
            "Digital Platforms",
            "Strategic Delivery",
            "Vue.js",
            "TypeScript",
          ],
        }),
      },
    ],
    // Google Analytics (if you have it)
    // ["script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" }],
    // ["script", { innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID');" }],
  ],
  themeConfig: {
    logo: "/gwendolin-tan.png",
    nav: [{ text: "Home", link: "/" }],

    sidebar: {},

    socialLinks: [
      { icon: "linkedin", link: "https://www.linkedin.com/in/gwendolintan" },
      { icon: "github", link: "https://github.com/moriatea" },
    ],

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Gwendolin Tan | Powered by VitePress`,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
      ViteImageOptimizer({
        png: { quality: 70, compressionLevel: 8 },
        jpeg: { quality: 70, progressive: true },
        webp: { quality: 68 },
        avif: { quality: 50 },
        includePublic: true,
      }),
    ] as any,
    build: {
      cssMinify: true,
      sourcemap: false,
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            chat: ["./docs/.vitepress/theme/components/Chat.vue"],
            "download-resume": ["./docs/components/DownloadResume.vue"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["vue", "marked", "jspdf"],
    },
  },
});
