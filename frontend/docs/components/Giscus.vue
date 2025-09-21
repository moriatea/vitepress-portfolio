<template>
  <div class="giscus-container">
    <div class="giscus"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useData } from "vitepress";

const { isDark } = useData();

const loadGiscus = () => {
  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.setAttribute("data-repo", "stevahnes/vitepress-portfolio");
  script.setAttribute("data-repo-id", "R_kgDOObyIyA");
  script.setAttribute("data-mapping", "number");
  script.setAttribute("data-term", "128");
  script.setAttribute("data-reactions-enabled", "0");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "bottom");
  script.setAttribute("data-theme", isDark.value ? "dark" : "light");
  script.setAttribute("data-lang", "en");
  script.crossOrigin = "anonymous";
  script.async = true;

  const giscusContainer = document.querySelector(".giscus");
  if (giscusContainer) {
    giscusContainer.appendChild(script);
  }
};

onMounted(() => {
  loadGiscus();
});

// Update theme when dark mode changes
watch(isDark, newVal => {
  const iframe = document.querySelector("iframe.giscus-frame") as HTMLIFrameElement;
  if (iframe) {
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: newVal ? "dark" : "light" } } },
      "https://giscus.app",
    );
  }
});
</script>
