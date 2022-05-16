export const state = () => ({
  users: [],
  user: null,
  focus: false,
  calling: {
    value: false,
    user: {
      image: "",
      name: "",
    },
    connected: false,
  },
  profile: {
    value: false,
    user: {
      image: "",
      name: "",
    },
  },
  snackbar: {
    color: "danger",
    message: "login required to access workspace",
    value: true,
  },
  uploadedImage: [{}],
  randomUser: "https://randomuser.me/api/portraits/med/women/",
});

export const getters = {
  getSnackBar: (state) => {
    return state.snackbar;
  },
};
export const mutations = {
  logout(state) {
    this.$router.push("/");
    console.log("logout");
    state.user = null;
  },
  setfocus(state) {
    state.focus = !state.focus;
  },
  endcall(state) {
    state.calling.value = false;
    state.calling.user.name = "";
    state.calling.user.image = "";
    state.calling.connected = false;
    console.log("call ended");
  },
  calluser(state, payload) {
    state.calling.value = true;
    state.calling.user.name = payload.name;
    state.calling.user.image = payload.picture;
    state.calling.connected = true;
    console.log("call started");
  },
  openprofile(state, payload) {
    state.profile.value = true;
    console.log(payload);
    state.profile.user.image = payload.picture;
    state.profile.user.name = payload.name;
    console.log("opened");
  },
  closeprofile(state) {
    console.log("closed");
    state.profile.value = false;
    state.profile.user.image = "";
    state.profile.user.name = "";
  },
  setSnackbar(state, payload) {
    state.snackbar = payload;
  },
  setUsers: (state, payload) => {
    state.users = payload;
  },
  setUser: (state, payload) => {
    state.user = payload;
  },
  setPassword: (state, payload) => {
    state.password = payload;
  },
  uploadImage: (state, payload) => {
    console.log("called index");
    console.log(payload);
    console.log(payload.desc);
    console.log(payload.previewImage);
    // console.log("test");

    // try {
    //   if (state.uploadedImage) {
    //     console.log(state.uploadedImage);
    //     state.uploadImage.pop((c) => console.log(c));
    //   }
    // } catch (e) {
    //   console.log(e);
    // }

    state.uploadedImage.push(payload);
    // console.log("image");
    // console.log(payload.previewImage);
    // console.log("desc");
    // console.log(payload.desc);
    // console.log(state.uploadedImage);
  },
};
