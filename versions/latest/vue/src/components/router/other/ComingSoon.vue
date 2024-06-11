<script setup>
import componentSpace from "./../../Space.vue";
</script>

<script>
export default {
  name: "ComponentComingSoon",
  data() {
    return {
      copyrightFromTitle: import.meta.env.VITE_CORPYRIGHT_FROM_TITLE,
      copyrightFromUrl: import.meta.env.VITE_CORPYRIGHT_FROM_URL,
      poweredByTitle: import.meta.env.VITE_POWEREDBY_TITLE,
      poweredByUrl: import.meta.env.VITE_POWEREDBY_URL,
    };
  },
};
</script>

<template>
  <div>
    <componentSpace
      :componentData="{
        favicon: `other/coming-soon`,
        title: $t(`COMING SOON`),
        message: $t(`At your service soon`),
        centerSvgIconUrl: `/other/coming-soon/img/img.svg`,
        copyrightFromTitle: copyrightFromTitle,
        copyrightFromUrl: copyrightFromUrl,
        poweredByTitle: poweredByTitle,
        poweredByUrl: poweredByUrl,
      }"
    />
  </div>
</template>
