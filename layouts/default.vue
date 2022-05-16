<template>
  <v-app>
    <Snackbar v-if="!$store.state.user" />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "~/components/snackbar";
import { mapState } from "vuex";
export default {
  components: {
    Snackbar,
  },
  data() {
    return {};
  },
  computed: {
    // ...mapState({
    //   user: (state) => state.user,
    // }),
  },
};
</script>
