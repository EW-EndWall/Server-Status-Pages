<script setup>
import componentSimple from "./../../Simple.vue";
</script>

<template>
  <div>
    <componentSimple
      :componentData="{
        favicon: `status/401`,
        title: $t(`Error 401`),
        message: $t(
          `If you're seeing this page, you tried to access here without authorization, your access is denied.`
        ),
        centerSvgImgUrl: `/status/401/img/img.svg`,
        domainTitle: `example.com`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "Component401",
};
</script>
