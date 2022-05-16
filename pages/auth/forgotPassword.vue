<template>
  <v-layout align-center column>
    <div class="logo pb-16 pt-2">
      <NuxtLogo style="height: 56px" />
    </div>
    <v-card
      elevation="0"
      width="400px"
      color="transparent"
      class="d-flex pt-16 flex-column justify-center align-center"
    >
      <!-- <v-card-text class="pt-1 pb-5 d-flex justify-center align-center">
      </v-card-text> -->
      <v-card-title class="text-h4 font-weight-light">
        Forgot Password?
      </v-card-title>
      <v-card-subtitle>
        Enter your email and follow the instructions
      </v-card-subtitle>
      <v-card-text
        class="d-flex flex-column pa-16 rounded-lg"
        style="background: white; border: rgb(189, 185, 185) 1px solid"
      >
        <v-text-field
          hide-spin-buttons
          aria-hidden=""
          full-width
          dense
          hide-details=""
          outlined
          class="pb-4"
          prepend-inner-icon="mdi-email"
          placeholder="Email Address"
        >
        </v-text-field>
        <v-btn block color="primary"> Recover Password </v-btn>
      </v-card-text>
      <nuxt-link class="text-left" to="/"
        ><p class="text-left">Go back to login</p></nuxt-link
      >
    </v-card>
  </v-layout>
</template>

<script>
export default {};
</script>

<style></style>
