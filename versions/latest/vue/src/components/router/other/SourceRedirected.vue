<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<script>
export default {
  name: "ComponentSourceRedirected",
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
        favicon: `other/source-redirected`,
        title: $t(`Source Redirected`),
        message: $t(
          `If you're seeing this page, sources emergency system to redirected, your access is denied.`
        ),
        centerSvgImgUrl: `/other/source-redirected/img/img.svg`,
        domainTitle: copyrightFromTitle,
      }"
    />
  </div>
</template>
