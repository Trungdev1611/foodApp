import axios from "axios";

const baseUrl = 'https://fake-server-app16111994.herokuapp.com/';

export const getData = async (key, limit) => {
    try {
        let data = await axios.get(`${baseUrl}${key}?_limit=${limit}`)
        return data.data
    }
    catch (error) {
        console.log(error)
    }


}

