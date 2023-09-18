
import axios from "axios";

const URLNET = 'http://ip172-19-0-77-ck49hr0gftqg00bsc200-5200.direct.labs.play-with-docker.com/pizzainfo'


//Ver todos los datos 
export const viewDatos = async (xset) => {
    try {
        const respuesta = await axios.get(`${URLNET}`)
        xset(respuesta.data)
        return respuesta.data
    } catch (error) {
        console.log(error)
    }
}