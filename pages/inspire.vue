<template>
  <v-app>
    <v-app-bar class="pa-0 ma-0" app clipped-right flat height="60px">
      <Header />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      height="100vh"
      class="pa-0 ma-0"
      width="60px"
    >
      <v-list class="d-flex pa-0 ma-0 flex-column justify-center align-center">
        <nuxt-link to="/">
          <NuxtLogo />
        </nuxt-link>

        <v-list-item-group
          mandatory
          v-model="user"
          aria-hidden=""
          class="overflow-y-hidden"
          style="height: 60vh"
        >
          <v-list-item
            class="pa-0 ma-0"
            v-for="user in users"
            :key="user.id"
            aria-hidden=""
          >
            <v-list-item-avatar width="34px" class="pa-0 ma-2">
              <v-img width="34px" :src="user.picture"> </v-img>
            </v-list-item-avatar>
            <v-list-item-content> </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="d-flex flex-row pb-4 justify-center align-center">
          <v-btn class="plusbtn" fab icon color="primary">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right width="400px">
      <SideBar />
      <!-- <Profile /> -->
      <!-- <Test/> -->
    </v-navigation-drawer>

    <Chat :user="user + 2" />
    <v-footer app height="72" inset>
      <Message :user="user + 2" />
    </v-footer>
  </v-app>
</template>
<script>
import Message from "~/components/layout/message";
import Header from "~/components/layout/header";
import SideBar from "~/components/layout/sidebar";
import Chat from "~/components/chat";
import Profile from "~/layouts/profile";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Profile,
    Header,
    Chat,
    Message,
    SideBar,
  },
  data() {
    return {
      // users: [],
      user: 0,
      page: "",
      drawer: null,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.data.chat.friends,
    }),
  },
  created() {
    console.log("created");
    console.log(this.$store.state.user);
    if (this.$store.state.user === null) {
      this.$router.push("/");
    }
  },
  // async fetch() {
  //   this.users = await fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => this.setUsers(data));
  // },
  // computed: {
  //   // ...mapState({
  //   //   users: (state) => state.users,
  //   // }),
  //   users: {
  //     get: function () {
  //       return this.$store.state.users;
  //     },
  //     set: function (value) {
  //       // this.setUsers(value);
  //     },
  //   },
  // },
  // methods: {
  //   ...mapMutations({
  //     setUsers: "setUsers",
  //   }),
  //   test() {
  //     console.log(this.user);
  //   },
  // },
};
</script>
<style scoped>
.plusbtn {
  border: 1.8px dashed #cecece;
}
</style>
