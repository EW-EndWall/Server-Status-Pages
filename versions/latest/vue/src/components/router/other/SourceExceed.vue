<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<script>
export default {
  name: "ComponentSourceExceed",
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
        favicon: `other/source-exceed`,
        title: $t(`Source Exceed`),
        message: $t(
          `If you're seeing this page, too many users are making requests, so resources are insufficient, the request has been queued for processing. Please wait.`
        ),
        centerSvgImgUrl: `/other/source-exceed/img/img.svg`,
        domainTitle: copyrightFromTitle,
      }"
    />
  </div>
</template>
