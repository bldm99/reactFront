
import axios from "axios";

const URLNET = 'http://ip172-18-0-18-ckcdh16fml8g008kl2ug-5200.direct.labs.play-with-docker.com/prueba/listar'


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