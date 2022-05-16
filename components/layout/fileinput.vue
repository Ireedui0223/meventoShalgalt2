<template>
  <div>
    <v-file-input
      class="pa-0 ma-0"
      hide-input
      hide-details=""
      aria-hidden=""
      v-model="currentImage"
      @change="selectImage"
    >
    </v-file-input>
    <v-dialog width="31vw" v-if="this.filechat.previewImage" v-model="dialog">
      <v-card rounded="lg" class="px-7">
        <v-card-title class="px-0 d-flex">
          <v-row class="py-8 pl-4">
            <v-col cols="3" class="pa-4">
              <v-img
                class="rounded-lg"
                max-width="85px"
                contain
                :src="this.filechat.previewImage"
              >
              </v-img>
            </v-col>
            <v-col cols="9" class="pa-0 d-flex flex-column justify-center">
              <v-card-subtitle class="font-weight-bold px-0 pb-0 text-body-2">
                Upload {{ this.currentImage.name }}
              </v-card-subtitle>
              <v-card-text class="text-caption px-0 pt-2 grey--text"
                >Upload this file and attach a message to it.<br />Attached
                messages are optional.</v-card-text
              >
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-textarea
            outlined
            rows="2"
            v-model="desc"
            placeholder="Attach a comment"
          >
          </v-textarea>
          <div class="d-flex flex-row align-center">
            <v-switch inset></v-switch>Share with everyone
          </div>
        </v-card-text>
        <v-card-actions class="px-0 pb-8">
          <v-btn elevation="0" outlined width="50%"> Cancel </v-btn>
          <v-btn elevation="0" width="50%" color="primary " @click="upload">
            <v-icon> mdi-send-outline</v-icon> Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      desc: "",
      currentImage: undefined,
      message: "",
      dialog: false,
      filechat: {
        previewImage: "",
        desc: "",
      },
    };
  },
  methods: {
    selectImage(image) {
      if (!image) {
        this.currentImage = null;
      } else {
        this.currentImage = image;
        console.log(this.filechat.previewImage);
        this.filechat.previewImage = URL.createObjectURL(image);
        console.log(this.filechat.previewImage);
        this.message = "";
        this.dialog = true;
      }
    },

    upload() {
      if (!this.currentImage) {
        console.log("error");
        this.message = "hooson baina!";
      }
      // console.log("called");
      this.filechat.desc = this.desc;
      // this.$store.commit("uploadImage", this.filechat);

      this.dialog = false;

      this.uploadImage(this.filechat);
      // console.log("input desc", this.filechat.desc);
      // (this.filechat.desc = ""), (this.filechat.previewImage = "");
    },
    ...mapMutations({
      uploadImage: "uploadImage",
    }),
  },
};
</script>

<style></style>
