<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `status/410`,
        title: $t(`Error 410`),
        message: $t(
          `The requested resource is no longer available on the server.`
        ),
        centerSvgImgUrl: `/status/410/img/img.svg`,
        domainTitle: `example.com`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "Component410",
};
</script>
