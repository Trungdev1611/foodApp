import axios from "axios";
//query string de chuyen doi object thanh quey
import queryString from 'query-string'
import Cookies from 'universal-cookie'
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
const cookies = new Cookies();

// const token = cookies.get('accessToken')
export const baseUrl = process.env.REACT_APP_BASEHEROKU;


// console.log(process.env.REACT_APP_BASEHEROKU)
// console.log(process.env.REACT_APP_BASEURLNODE)


export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURLNODE,
    timeout: 10000,

})
instance.interceptors.request.use(function (request) {

    let tokenaccess = cookies.get('accessToken')
    //mac dinh request dung instance gui se bao gom authorization
    request.headers.Authorization = tokenaccess
    return request
})



export const getData = async (key, obj) => {
    try {

        let queryUrL = `${baseUrl}${key}?${queryString.stringify(obj)}`
        // console.log('query1', queryUrL)
        let data1 = await axios.get(queryUrL)

        //lay so luong phan tu de tinh so page
        obj._limit = undefined // lay tat ca phan tu
        obj._page = undefined // lay tat ca cac trang
        let queryUrL2 = `${baseUrl}${key}?${queryString.stringify(obj)}`
        // console.log('query2', queryUrL2)

        let countPage = await axios.get(queryUrL2)

        return { data: data1.data, countPage: countPage.data.length }

    }
    catch (error) {
        console.log(error)
    }


}