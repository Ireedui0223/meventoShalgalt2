<template>
  <!-- <div>
    <p>test</p>
    <pre>{{ snackBar }}</pre>
  </div> -->
  <v-snackbar
    transition="slide-x-transition"
    class="pa-10"
    v-model="value"
    color="danger"
    rounded="lg"
    fixed
    bottom
    right
    timeout="2000"
  >
    <v-icon>mdi-alert</v-icon>
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="close()">
        <v-icon> mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      color: "",
      timeout: "",
      message: "",
    };
  },
  computed: {
    snackBar() {
      return this.$store.getters["getSnackBar"];
    },
  },
  created() {
    this.value = this.$store.state.snackbar.value;
    this.color = this.$store.state.snackbar.color;
    this.message = this.$store.state.snackbar.message;
    console.log("ireedui");
  },
  methods: {
    close() {
      this.value = false;
    },
  },
};
</script>

<style></style>
