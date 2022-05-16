<template>
  <v-sheet height="100%">
    <!-- <pre>{{ chats }}</pre> -->
    <div
      v-for="chat in chats.find((c) => c.id === user).chatlog"
      :key="chat.message_id"
    >
      <v-card elevation="2">
        <!-- <v-card-text class="ma-0 pa-0" v-if="chat.message.attached !== ''">
          {{ chat.message.attached }}
        </v-card-text> -->
        <v-card-title>
          {{ chat.message.text }}
        </v-card-title>
      </v-card>
    </div>

    <!-- <v-list
      v-for="chat in chats.find((c) => c.id === user).chatlog"
      :key="chat.message_id"
    >
      <v-list-item>
        <v-list-item-title>
          <p v-if="chat.message.attached"></p>
          <pre> {{ chat.message.attached }}</pre>
          <pre> {{ chat.message.text }}</pre>
        </v-list-item-title>
      </v-list-item>
    </v-list> -->
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    user: Number,
  },

  data() {
    return {};
  },
  computed: {
    ...mapState({
      images: (state) => state.image,
      chats: (state) => state.data.chat.friends,
    }),
  },
};
</script>

<style></style>
