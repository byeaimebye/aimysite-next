import axios from "axios"

const getPoke = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export default getPoke
