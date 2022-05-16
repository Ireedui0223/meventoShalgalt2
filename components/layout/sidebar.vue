<template>
  <v-sheet height="100%" width="100%" class="px-4">
    <!-- <v-card height="100%" class="d-flex flex-column justify-start px-6"> -->
    <v-tabs class="pt-4" color="primary" v-model="tab">
      <v-tab>People</v-tab>
      <v-tab class="d-flex flex-row justify-space-between">Activity</v-tab>
    </v-tabs>
    <Profile v-if="$store.state.profile.value == true" />

    <v-tabs-items v-model="tab" v-if="$store.state.profile.value == false">
      <v-tab-item>
        <div class="d-flex pt-6 flex-row align-center justify-center">
          <p class="ma-0 pa-0 text-body-2 grey--text text--lighten-1">
            STARTED BY
          </p>
          <v-divider></v-divider>
        </div>

        <v-list>
          <v-list-item class="border rounded-lg">
            <v-badge dot bordered color="primary" offset-x="20" offset-y="4">
              <v-list-item-avatar class="pa-0 ma-0 mr-4" rounded="">
                <v-img :src="$store.state.randomUser + 1 + '.jpg'"></v-img>
              </v-list-item-avatar>
            </v-badge>

            <v-list-item-content>
              <v-list-item-title> Leanne Graham </v-list-item-title>
              <v-list-item-subtitle>S@april.biz</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="d-flex flex-row align-center">
              <v-btn
                class="ml-1 pa-3"
                color="accent"
                x-small
                outlined
                icon
                @click="
                  $store.commit('openprofile', {
                    name: 'leanne graham',
                    picture:
                      'https://randomuser.me/api/portraits/med/women/1.jpg',
                  })
                "
                ><v-icon>mdi-eye-outline</v-icon></v-btn
              >
              <!-- <v-btn class="ml-1 pa-3" color="accent" x-small outlined icon
                ><v-icon>mdi-phone-outline</v-icon></v-btn
              >
              <v-btn class="ml-1 pa-3" color="accent" x-small outlined icon
                ><v-icon>mdi-file-outline</v-icon></v-btn
              > -->
            </v-list-item-action>
          </v-list-item>
          <div class="d-flex pt-6 flex-row align-center justify-center">
            <p class="ma-0 pa-0 text-body-2 grey--text text--lighten-1">
              IN THE CONVERSATION
            </p>
            <v-divider></v-divider>
          </div>
          <v-list-item-group v-for="user in users.slice(0, 5)" :key="user.id">
            <v-list-item>
              <v-list-item-avatar rounded="">
                <v-img :src="user.picture"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-body-2">
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-body-2"
                  >Sincere@april.biz</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action class="d-flex flex-row align-center">
                <v-btn
                  class="ml-1 pa-3"
                  color="accent"
                  x-small
                  outlined
                  icon
                  @click="$store.commit('openprofile', user)"
                  ><v-icon>mdi-eye-outline</v-icon></v-btn
                >
                <v-btn
                  class="ml-1 pa-3"
                  color="accent"
                  @click="$store.commit('calluser', user)"
                  x-small
                  outlined
                  icon
                  ><v-icon>mdi-phone-outline</v-icon></v-btn
                >
                <v-btn class="ml-1 pa-3" color="accent" x-small outlined icon
                  ><v-icon>mdi-file-outline</v-icon></v-btn
                >
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-tab-item>
      <v-tab-item>
        <div class="d-flex pt-6 flex-row align-center justify-center">
          <p class="ma-0 pa-0 grey--text text--lighten-1">New</p>
          <v-divider></v-divider>
        </div>
        <v-list>
          <v-list-item>
            <v-list-item-avatar rounded="">
              <v-img :src="$store.state.randomUser + 2 + '.jpg'"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="overflow-visible d-flex flex-wrap"
                >userName posted <a> an update </a> in a project's team space
              </v-list-item-subtitle>
              <v-list-item-subtitle> 5 min ago </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar rounded="">
              <v-img :src="$store.state.randomUser + 4 + '.jpg'"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-subtitle class="overflow-visible d-flex flex-wrap"
                >userName posted <a> an update </a> in a project's team space
              </v-list-item-subtitle>
              <v-list-item-subtitle> 5 min ago </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <div class="d-flex pt-6 flex-row align-center justify-center">
            <p class="ma-0 pa-0 grey--text text--lighten-1">Recent</p>
            <v-divider></v-divider>
          </div>
          <v-list-item>
            <v-list-item-avatar rounded="">
              <v-img :src="$store.state.randomUser + 4 + '.jpg'"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="overflow-visible d-flex flex-wrap"
                >userName posted <a> an update </a> in a project's team space
              </v-list-item-subtitle>
              <v-list-item-subtitle> 5 min ago </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
    <!-- </v-card> -->
    <v-dialog v-model="dialog" width="30vw">
      <Calling />
    </v-dialog>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
import Calling from "~/components/dialog/calling";
import Profile from "~/components/sidebar/profile";
export default {
  components: {
    Profile,
    Calling,
  },
  data() {
    return {
      tab: "",
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.data.chat.friends,
    }),
    dialog: {
      get: function () {
        return this.$store.state.calling.value;
      },
      set: function () {
        this.$store.commit("endcall");
      },
    },
  },
  methods: {},
};
</script>

<style>
.border {
  border: 1px #bdbdb7 solid;
}
</style>
