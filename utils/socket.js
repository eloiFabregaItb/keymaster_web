import { reactive } from "vue";
import { io } from "socket.io-client";
import { api_ip } from "~/constants";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
});

var token = ""//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3JfaWQiOjQyLCJpYXQiOjE3MTM4ODMxNzksImV4cCI6MTcxNDkxOTk3OX0.JUbVQjWn-qQSruE7lxpzvJR3UDnTYP1VYTj4Y40wuKc"

export const socket = io(api_ip,{
    transports: ['websocket'],
    auth: {
        token: token,
    }
});

socket.emit("test", {msg: "hello"})

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("foo", (...args) => {
  console.log(args)
  state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
  state.barEvents.push(args);
});

socket.on("login notification", (data) => {
  console.log("ha iniciado sesion",data)
});

socket.on("logout notification", (data) => {
  console.log("cierra sesion",data)
});

socket.on("test", (data) => {
  console.log("mensaje",data)
});