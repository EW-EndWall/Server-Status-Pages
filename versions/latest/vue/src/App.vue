<template>
  <component :is="currentComponent" />
</template>

<script>
import Component400 from "./components/router/status/400.vue";
import Component401 from "./components/router/status/401.vue";
import Component403 from "./components/router/status/403.vue";
import Component404 from "./components/router/status/404.vue";
import Component410 from "./components/router/status/410.vue";
import Component500 from "./components/router/status/500.vue";

import ComponentBuilding from "./components/router/other/Building.vue";
import ComponentClosed from "./components/router/other/Closed.vue";
import ComponentComingSoon from "./components/router/other/ComingSoon.vue";
import ComponentHostDefault from "./components/router/other/HostDefault.vue";
import ComponentHostNameserver from "./components/router/other/HostNameserver.vue";
import ComponentMaintenanceMode from "./components/router/other/MaintenanceMode.vue";
import ComponentPlanned from "./components/router/other/Planned.vue";
import ComponentSoon from "./components/router/other/Soon.vue";
import ComponentSourceExceed from "./components/router/other/SourceExceed.vue";
import ComponentSourceRedirected from "./components/router/other/SourceRedirected.vue";

export default {
  data() {
    return {
      component: null,
    };
  },
  created() {
    this.selectComponent();
    this.setLang();
  },
  methods: {
    setLang() {
      // * get local lang
      if (localStorage.getItem("language") != null)
        return this.$changeLanguage(localStorage.getItem("language"));
      // * get browser lang
      this.$changeLanguage(navigator.language.split("-")[0]);
    },
    selectComponent() {
      const urlParams = new URLSearchParams(window.location.search);
      this.component = urlParams.get("sp");

      switch (this.component) {
        case "400":
          this.currentComponent = Component400;
          break;

        case "401":
          this.currentComponent = Component401;
          break;

        case "403":
          this.currentComponent = Component403;
          break;

        case "404":
          this.currentComponent = Component404;
          break;

        case "410":
          this.currentComponent = Component410;
          break;

        case "500":
          this.currentComponent = Component500;
          break;

        case "building":
          this.currentComponent = ComponentBuilding;
          break;

        case "closed":
          this.currentComponent = ComponentClosed;
          break;

        case "coming-soon":
          this.currentComponent = ComponentComingSoon;
          break;

        case "host-default":
          this.currentComponent = ComponentHostDefault;
          break;

        case "host-nameserver":
          this.currentComponent = ComponentHostNameserver;
          break;

        case "maintenance-mode":
          this.currentComponent = ComponentMaintenanceMode;
          break;

        case "planned":
          this.currentComponent = ComponentPlanned;
          break;

        case "soon":
          this.currentComponent = ComponentSoon;
          break;

        case "source-exceed":
          this.currentComponent = ComponentSourceExceed;
          break;

        case "source-redirected":
          this.currentComponent = ComponentSourceRedirected;
          break;

        default:
          this.currentComponent = ComponentHostDefault;
          break;
      }
    },
  },
};
</script>
