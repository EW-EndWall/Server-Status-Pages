<script setup>
import componentSpace from "./../../Space.vue";
</script>

<script>
export default {
  name: "ComponentHostDefault",
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
        favicon: `other/host-default`,
        title: $t(`A OBJECT IS APPROACHING`),
        message: $t(`It seems that this object has no shape, start editing !`),
        centerSvgIconUrl: `/other/host-default/img/img.svg`,
        copyrightFromTitle: copyrightFromTitle,
        copyrightFromUrl: copyrightFromUrl,
        poweredByTitle: poweredByTitle,
        poweredByUrl: poweredByUrl,
      }"
    />
  </div>
</template>
