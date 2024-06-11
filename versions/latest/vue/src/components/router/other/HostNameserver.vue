<script setup>
import componentSpace from "./../../Space.vue";
</script>

<script>
export default {
  name: "ComponentHostNameserver",
  data() {
    return {
      dataNs1: import.meta.env.VITE_HOST_NAMESERVER_1,
      dataNs2: import.meta.env.VITE_HOST_NAMESERVER_2,
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
        favicon: `other/host-nameserver`,
        title: $t(`NEW PLANET`),
        message:
          $t(`Frequencies with which you can communicate with this planet.`) +
          `<div><h2>${dataNs1}</h2><p/><h2>${dataNs2}</h2></div>`,
        centerSvgIconUrl: `/other/host-nameserver/img/img.svg`,
        copyrightFromTitle: copyrightFromTitle,
        copyrightFromUrl: copyrightFromUrl,
        poweredByTitle: poweredByTitle,
        poweredByUrl: poweredByUrl,
      }"
    />
  </div>
</template>
