// import { api_ip } from "~/constants";
// import {io} from "socket.io-client"
// import { userStore } from '../storages/userStore.js'
// const store = userStore()


// let socket = null//io(api_ip)
// export function handleLoginSocket(token){
//     console.log("LOGIN", token)
//     socket = io(api_ip, {transports: ["websocket"], auth: {token}})
//     socket.on("connect", ()=> console.log("ws connected"))
//     socket.on("disconnect", ()=> console.log("ws disconnected"))
//     socket.on("GAME_CREATED", (data) => console.log("GAME_CREATED", data))
//     socket.on("GAME_USER_JOINED", (data) => console.log("GAME_USER_JOINED", data))
//     socket.on("GAME_NOT_FOUND", (data) => console.log("GAME_NOT_FOUND", data))
//     socket.on("GAME_NOT_RECLUTING", (data) => console.log("GAME_NOT_RECLUTING", data))
//     socket.on("GAME_ALREADY_JOINED", (data) => console.log("GAME_ALREADY_JOINED", data))
//     socket.on("GAME_USER_BANNED", (data) => console.log("GAME_USER_BANNED", data))
//     socket.on("TEST", (data) => console.log("TEST", data))

//     socket.on("WELCOME", data => console.log("WELCOME", data))
//     socket.on("LOGIN", data => {
//         console.log("LOGIN", data)
//         store.updateOnlineFriends(data.user.id, true)
//     })
//     socket.on("LOGOUT", data => console.log("LOGOUT", data))
// }


// //  CREATE GAME

// function createGame() {
//     console.log("CREATE GAME")
//     socket.emit("NEW_GAME")
//   }



//   // JOIN GAME
//   function joinGame() {
//     const code = document.getElementById("codeJoin").value
//     socket.emit("JOIN_GAME", { code })

//   }
