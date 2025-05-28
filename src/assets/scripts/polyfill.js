(function() {
    if (CSS.supports("animation-timeline", "view()")) {
    } else {
      const script = document.createElement("script");
      script.src = "./assets/scripts/polyfilles/scroll-timeline.js";
      script.onload = () => {
        console.log("Polyfill loaded");
      };
      script.onerror = () => {
        console.error("Polyfill load error");
      };
    }
  })();