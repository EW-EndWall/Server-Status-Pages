<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<script>
export default {
  name: "ComponentMaintenanceMode",
  data() {
    return {
      copyrightFromTitle: import.meta.env.VITE_CORPYRIGHT_FROM_TITLE,
    };
  },
};
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `other/maintenance-mode`,
        title: $t(`Maintenance Mode`),
        message: $t(
          `If you're seeing this page, something is broken or some innovation is going on, usually it doesn't take long, your access is denied.`
        ),
        centerSvgImgUrl: `/other/maintenance-mode/img/img.svg`,
        domainTitle: copyrightFromTitle,
      }"
    />
  </div>
</template>
