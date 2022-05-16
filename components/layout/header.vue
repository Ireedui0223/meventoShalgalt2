<template>
  <v-row class="d-flex flex-row justify-space-between align-center">
    <v-col class="d-flex flex-row">
      <!-- <v-avatar>
        <v-img
          src="https://randomuser.me/api/portraits/med/women/2.jpg"
        ></v-img>
      </v-avatar> -->
      <v-card
        class="pa-0 ma-0 d-flex flex-row"
        elevation="0"
        color="transparent"
      >
        <v-avatar class="mt-4">
          <v-img
            src="https://randomuser.me/api/portraits/med/women/2.jpg"
          ></v-img>
        </v-avatar>
        <div>
          <v-card-title> Mike Baggio </v-card-title>
          <v-card-subtitle class="grey--text text-lighten-1"
            >1 participants
          </v-card-subtitle>
        </div>
      </v-card>
    </v-col>
    <v-col class="user d-flex flex-row align-center">
      <v-switch
        hide-details=""
        off-icon="mdi-theme-light-dark"
        validate-on-blur
        dense
        v-model="$vuetify.theme.dark"
      ></v-switch>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        placeholder="search messages"
        height="30px"
        hide-details=""
        dense
        outlined
      ></v-text-field>
      <v-btn icon small class="mx-2">
        <v-icon> mdi-cog-outline</v-icon>
      </v-btn>
      <v-menu offset-y v-model="menu">
        <template v-slot:activator="{ on, attrs }">
          <div class="userOuterRing rounded-pill">
            <v-badge color="primary" dot bordered offset-x="10" offset-y="10">
              <v-avatar
                min-width="40px"
                width="40px"
                height="40px"
                min-height="40px"
                v-bind="attrs"
                v-on="on"
                @click="open()"
              >
                <div class="rounded-pill">
                  <v-img
                    class="ma-1"
                    width="32px"
                    src="https://randomuser.me/api/portraits/med/women/1.jpg"
                  ></v-img>
                </div>
              </v-avatar>
            </v-badge>
          </div>
        </template>
        <v-list width="20vw">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Leanne Graham </v-list-item-title>
              <v-list-item-subtitle>{{
                $store.state.user
              }}</v-list-item-subtitle>
              <v-list-item-action
                class="d-flex flex-row pa-0 ml-1 align-center"
              >
                <v-switch
                  inset
                  dense
                  flat
                  color="danger"
                  v-model="focus"
                  class="pr-3"
                ></v-switch>
                <v-list-item-content>
                  <v-list-item-title> Busy Mode </v-list-item-title>
                  <v-list-item-subtitle>
                    Sets your status to busy
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-file</v-icon></v-list-item-action
              >
              <v-list-item-content>
                <v-list-item-title> My files </v-list-item-title>
                <v-list-item-subtitle>
                  View all your files
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action
                ><v-icon>mdi-share</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Shared files </v-list-item-title>
                <v-list-item-subtitle>
                  Files shared with me
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-divider> </v-divider>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-action
                ><v-icon>mdi-plus</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Add workspace </v-list-item-title>
                <v-list-item-subtitle>
                  Create a new workspace
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-divider> </v-divider>
          <v-list-item-group>
            <v-list-item @click="logout(), ($vuetify.theme.dark = false)">
              <v-list-item-action
                ><v-icon>mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Logout </v-list-item-title>
                <v-list-item-subtitle>
                  Logout from your account
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menu: false,
      theme: false,
    };
  },
  methods: {
    open() {
      this.menu = true;
    },
    logout() {
      this.$store.commit("logout");
    },
  },
  computed: {
    focus: {
      set: function () {
        this.$store.commit("setfocus");
      },
      get: function () {
        return this.$store.state.focus;
      },
    },
  },
};
</script>

<style>
.user {
  max-width: 400px !important;
}

.userOuterRing {
  /* background: purple !important; */
  border: purple 1px solid;
}
</style>
