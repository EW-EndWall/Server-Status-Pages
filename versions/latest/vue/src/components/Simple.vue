<script>
export default {
  name: "componentSimple",
  props: {
    componentData: {
      favicon: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: false,
      },
      centerSvgImgUrl: {
        type: String,
        required: false,
      },
      domainTitle: {
        type: String,
        required: false,
      },
    },
  },
  created() {
    this.createMetaTag();
  },
  methods: {
    createMetaTag() {
      this.setPageLanguage(this.$currentLanguage());
      this.setPageTitle(this.componentData.title);
      if (this.componentData?.favicon) {
        this.setPageIcon(
          `./${this.componentData?.favicon}/favicon/favicon.ico`
        );
        this.setPageIcon(
          `./${this.componentData?.favicon}/favicon/favicon-16x16.png`,
          "16x16"
        );
        this.setPageIcon(
          `./${this.componentData?.favicon}/favicon/favicon-32x32.png`,
          "32x32"
        );
        this.setPageIcon(
          `./${this.componentData?.favicon}/favicon/android-chrome-192x192.png`,
          "192x192"
        );
        this.setPageIcon(
          `./${this.componentData?.favicon}/favicon/android-chrome-512x512.png`,
          "512x512"
        );
        this.setPageIcon(
          `./${this.componentData?.favicon}/favicon/apple-touch-icon.png`,
          "512x512",
          "apple"
        );
        this.setMsapplication(
          `./${this.componentData?.favicon}/favicon/favicon.ico`
        );
      }
    },
    setPageLanguage(lang) {
      document.documentElement.lang = lang;
    },
    setPageTitle(title) {
      document.title = title;
    },
    setPageIcon(iconUrl, iconSizes, iconRel) {
      const link =
        // document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      if (!iconSizes) link.type = "image/x-icon";
      iconRel == "apple"
        ? (link.rel = "apple-touch-icon")
        : (link.rel = "icon");
      link.href = iconUrl;
      if (iconSizes) link.sizes = iconSizes;
      document.head.appendChild(link);
    },
    setMsapplication(setUrl) {
      const msapplication = document.createElement("meta");
      msapplication.name = "msapplication-TileImage";
      msapplication.content = setUrl;
      document.head.appendChild(msapplication);
    },
  },
};
</script>

<template>
  <div class="simple">
    <div class="overlay"></div>
    <div class="stars" aria-hidden="true"></div>
    <div class="starts2" aria-hidden="true"></div>
    <div class="stars3" aria-hidden="true"></div>
    <img
      v-if="componentData?.centerSvgImgUrl"
      :src="componentData?.centerSvgImgUrl"
      alt="logo"
    />
    <h1>{{ componentData.title }}</h1>
    <hr />
    <p v-if="componentData?.message" v-html="componentData.message"></p>
    <hr />
    <p v-if="componentData?.domainTitle">
      {{ componentData?.domainTitle }}
    </p>
  </div>
</template>
