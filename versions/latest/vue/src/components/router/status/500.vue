<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `status/500`,
        title: $t(`Error 500`),
        message: $t(
          `If you're seeing this page, something went wrong and we messed something up. If you've been seeing it for a long time, we're in trouble. :/`
        ),
        centerSvgImgUrl: `/status/500/img/img.svg`,
        domainTitle: `example.com`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "Component500",
};
</script>
