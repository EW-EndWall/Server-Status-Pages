<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `status/403`,
        title: $t(`Error 403`),
        message: $t(
          `If you're seeing this page, access to this resource is prohibited, your access is denied.`
        ),
        centerSvgImgUrl: `/status/403/img/img.svg`,
        domainTitle: `example.com`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "Component403",
};
</script>
