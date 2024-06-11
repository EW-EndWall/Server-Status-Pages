<script setup>
import componentSpace from "./../../Space.vue";
</script>

<script>
export default {
  name: "ComponentPlanned",
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
        favicon: `other/planned`,
        title: $t(`< PLANNED />`),
        message: $t(`This service is still in the planning stage..`),
        centerSvgIconUrl: `/other/planned/img/img.svg`,
        copyrightFromTitle: copyrightFromTitle,
        copyrightFromUrl: copyrightFromUrl,
        poweredByTitle: poweredByTitle,
        poweredByUrl: poweredByUrl,
      }"
    />
  </div>
</template>
