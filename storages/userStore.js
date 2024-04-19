import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    email: '',
    username: '',
    profileImg: '',
    emailVerified: false,
    jwt: '',
    isLogged: false,
    friends: [],
    followers: [],
    notifications: []
  }),
  getters: {
    userInfo(state) {
      return {
        email: state.email,
        username: state.username,
        profileImg: state.profileImg,
        emailVerified: state.emailVerified,
        jwt: state.jwt,
        isLogged: state.isLogged,
        friends: state.friends,
        followers: state.followers,
        notifications: state.notifications
      };
    }
  },
  actions: {
    updateUser({ email, username, profileImg, emailVerified, jwt, isLogged, friends, followers, notifications }) {
      this.email = email;
      this.username = username;
      this.profileImg = profileImg;
      this.emailVerified = emailVerified;
      this.jwt = jwt;
      this.isLogged = isLogged,
      this.friends = friends,
      this.followers = followers,
      this.notifications = notifications
    },
    clearUser() {
      this.email = '';
      this.username = '';
      this.profileImg = '';
      this.emailVerified = false;
      this.jwt = '';
      this.isLogged = false;
      this.friends = [];
      this.followers = [];
      this.notifications = []
    }
  }
});
