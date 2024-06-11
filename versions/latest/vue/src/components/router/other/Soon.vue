<script setup>
import componentSpace from "./../../Space.vue";
</script>

<script>
export default {
  name: "ComponentSoon",
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
        favicon: `other/soon`,
        title: $t(`SOON`),
        message: $t(`This service will be at your service soon..`),
        centerSvgIconUrl: `/other/soon/img/img.svg`,
        copyrightFromTitle: copyrightFromTitle,
        copyrightFromUrl: copyrightFromUrl,
        poweredByTitle: poweredByTitle,
        poweredByUrl: poweredByUrl,
      }"
    />
  </div>
</template>
