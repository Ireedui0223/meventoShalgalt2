<template>
  <v-row class="pa-0 ma-0">
    <v-col
      cols="8"
      class="pa-14 px-16 d-flex justify-center align-center"
      style="background: #f5f5f0"
    >
      <v-img
        height="75%"
        contain
        src="https://moebius.cssninja.io/img/illustrations/screen-1.png"
      ></v-img
    ></v-col>
    <v-col cols="4">
      <v-card class="px-8" elevation="0">
        <v-card-text class="pt-1 pb-5 d-flex justify-center align-center">
          <NuxtLogo style="height: 52px" />
        </v-card-text>
        <v-card-title class="pt-16 pb-13"
          ><p class="text-h4 font-weight-light">Welcome Back.</p>
          <p class="pb-1 grey--text text-body-1 font-weight-light">
            Please sign in to your account
          </p>
          <nuxt-link to="/" class="text-decoration-none"
            ><p class="font-weight-light text-body-2">
              i do not have an account yet
            </p></nuxt-link
          >
        </v-card-title>
        <v-card-text>
          <v-text-field
            class="pb-3"
            outlined
            dense
            :rules="[rules.required, rules.email]"
            v-model="userName"
            hide-details=""
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            dense
            hide-details=""
            outlined
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <div class="d-flex flex-row align-center">
            <v-switch
              color="primary"
              inset
              background-color="transparent"
              dense
            ></v-switch>
            <p class="black--text text-body-1 pa-0 ma-0">Remember Me</p>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex flex-column align-start">
          <v-btn color="primary" block @click="login(userName, password)"
            >Sign in</v-btn
          >
          <nuxt-link
            class="pt-2 text-decoration-none grey--text"
            to="/auth/forgotPassword"
          >
            Forgot Password?</nuxt-link
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import NuxtLogo from "~/components/NuxtLogo";
export default {
  data() {
    return {
      userName: "Ireedui@gmail.com",
      password: "91853040",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    login(userName, password) {
      this.$store.commit("setUser", userName);
      this.$router.push("/inspire");
    },
  },
  //   computed: {
  //     userName: {
  //       get: function () {
  //         return this.$store.state.userName;
  //       },
  //       set: function (newValue) {
  //         this.$store.commit("setUser", newValue);
  //       },
  //     },
  //     password: {
  //       get: function () {
  //         return this.$store.state.password;
  //       },
  //       set: function (newValue) {
  //         this.$store.commit("setPassword", newValue);
  //       },
  //     },
  //   },
  components: {
    NuxtLogo,
  },
};
</script>

<style>
p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
