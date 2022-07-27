import axios from "axios";
import queryString from 'query-string'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export const baseUrl = process.env.REACT_APP_BASEHEROKU;


export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURLNODE,
    timeout: 10000,

})
instance.interceptors.request.use(function (request) {

    let tokenaccess = cookies.get('accessToken')
    request.headers.Authorization = tokenaccess
    return request
})



export const getData = async (key, obj) => {
    try {

        let queryUrL = `${baseUrl}${key}?${queryString.stringify(obj)}`

        let data1 = await axios.get(queryUrL)
        obj._limit = undefined
        obj._page = undefined
        let queryUrL2 = `${baseUrl}${key}?${queryString.stringify(obj)}`


        let countPage = await axios.get(queryUrL2)

        return { data: data1.data, countPage: countPage.data.length }

    }
    catch (error) {
        console.log(error)
    }


}