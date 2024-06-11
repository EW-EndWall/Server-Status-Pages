<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `status/404`,
        title: $t(`Error 404`),
        message: $t(
          `If you're seeing this page, something went wrong, we searched everywhere but couldn't find anything.`
        ),
        centerSvgImgUrl: `/status/404/img/img.svg`,
        domainTitle: `example.com`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "Component404",
};
</script>
