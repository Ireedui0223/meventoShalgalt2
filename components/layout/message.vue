<template>
  <v-text-field
    v-model="text"
    outlined
    slot="prepend-inner, append"
    append-icon="mdi-close"
    hide-details=""
    aria-hidden=""
    dense
    class="ma-0 px-10 d-flex align-center justify-center"
  >
    <Fileinput slot="prepend-inner" class="pb-2" />
    <v-btn
      class="mt-1"
      width="30px "
      height="30px"
      color="primary"
      slot="append"
      @click="sent()"
    >
      Send
    </v-btn>
    <v-btn><v-icon>mdi-close</v-icon></v-btn>
  </v-text-field>
</template>

<script>
import Fileinput from "~/components/layout/fileinput";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Fileinput,
  },
  props: {
    user: Number,
  },
  data() {
    return {
      text: "",
      file: [],
    };
  },
  computed: {
    ...mapState({
      chat: (state) => state.data.chat.friends,
    }),
  },
  methods: {
    sent() {
      this.upload({
        message: { text: this.text, attached: "test" },
        id: this.user,
      });
    },
    ...mapMutations({
      upload: "data/chat/sentChat",
    }),
  },
};
</script>

<style>
.v-btn__content {
  width: 28px !important;
}
/* .v-input__prepend-inner {
  margin: 0 !important;
}
.v-input__append-inner {
  margin: 0 !important;
} */
</style>
