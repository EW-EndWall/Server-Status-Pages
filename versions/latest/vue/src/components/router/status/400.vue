<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `status/400`,
        title: $t(`Error 400`),
        message: $t(`Invalid request sent`),
        centerSvgImgUrl: `/status/400/img/img.svg`,
        domainTitle: `example.com`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "Component400",
};
</script>
