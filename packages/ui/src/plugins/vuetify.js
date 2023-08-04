import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify, {
  components,
  directives,
});

export default new Vuetify({
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
      dark: {
        primary: colors.blue,
      },
      light: {
        primary: colors.blue,
        secondary: colors.lightBlue,
      },
    },
  },
  icons: {
    iconFont: "mdi",
  },
});
