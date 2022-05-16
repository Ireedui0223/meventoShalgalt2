<template>
  <v-card
    rounded="lg"
    class="py-8 px-10 d-flex flex-column justify-center align-center"
  >
    <v-avatar width="160px" height="160px">
      <v-img :src="$store.state.calling.user.image"> </v-img>
    </v-avatar>
    <v-card-title class="font-weight-bold text-h4 pt-8">
      {{ $store.state.calling.user.name }}
    </v-card-title>
    <v-card-subtitle
      class="px-3 text-center"
      v-if="$store.state.calling.connected == false"
      >Looks like Mike Baggio wasn't able to pick up the call. What would you
      like to do next?
    </v-card-subtitle>
    <v-card-subtitle v-else class="text-h5 text-center"
      >We'll connect you when Mike Baggio picks up.
      <div class="d-flex flex-row justify-center pt-8">
        <v-btn
          class="pr-2 text-h5"
          color="transparent"
          elevation="0"
          width="50%"
          ><v-icon>mdi-phone-outgoing-outline</v-icon>Call again</v-btn
        ><v-btn
          class="pl-2 text-h5"
          color="transparent"
          elevation="0"
          width="50%"
          ><v-icon>mdi-chat-outline</v-icon>Call again</v-btn
        >
      </div>
    </v-card-subtitle>
    <v-card-actions class="pt-16">
      <v-btn
        width="20vw"
        outlined
        block
        class="py-6 text-h6"
        @click="$store.commit('endcall')"
        ><v-icon>mdi-phone-off-outline</v-icon> End Call</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
