import axios from 'axios';
import { defineStore } from 'pinia';
import { api_ip } from '~/constants';

export const isOnline = ref(false)





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
      isOnline.value = isLogged

      localStorage.setItem('jwt', jwt);

    },
    updateOnlineFriends(id, isOnline) {
      console.log("entra funcion actualizar")
      const friend = this.friends.find(x => x.id == id)
      friend.online = isOnline

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
      isOnline.value = false
      localStorage.removeItem("jwt")
    },
    isOnline(){
      return this.isLogged
    }
  }
});

const store = userStore()


async function tryAutoLogin(){
  const token = localStorage.getItem('jwt');
  console.log("TOKEN",token)

  if(!token) return

  try{

    const response = await axios.post(`${api_ip}/auth/loginjwt`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    if (response.data.success) {
      localStorage.setItem('jwt', response.data.jwt);
  
      console.log("AUTOLOGIN")
  
      store.updateUser({
        email: response.data.email,
        username: response.data.username,
        profileImg: response.data.profileImg,
        emailVerified: response.data.emailVerified,
        jwt: response.data.jwt,
        isLogged: true,
        friends: response.data.friends,
        followers: response.data.followers,
        notifications: response.data.notifications
      })
  
    }else{
      console.log("USER NOT LOGGED")
      localStorage.removeItem("jwt")
    }

  }catch(error){

    console.error(error)
    console.log("USER NOT LOGGED")
    localStorage.removeItem("jwt")
  }

}

tryAutoLogin()
