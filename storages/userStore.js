import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    email: '',
    username: '',
    profileImg: '',
    emailVerified: false,
    jwt: ''
  }),
  getters: {
    userInfo(state) {
      return {
        email: state.email,
        username: state.username,
        profileImg: state.profileImg,
        emailVerified: state.emailVerified,
        jwt: state.jwt
      };
    }
  },
  actions: {
    // Acción para actualizar la información del usuario
    updateUser({ email, username, profileImg, emailVerified, jwt }) {
      this.email = email;
      this.username = username;
      this.profileImg = profileImg;
      this.emailVerified = emailVerified;
      this.jwt = jwt
    },
    // Acción para limpiar la información del usuario
    clearUser() {
      this.email = '';
      this.username = '';
      this.profileImg = '';
      this.emailVerified = false;
      this.jwt = ''
    }
  }
});
