import axios from "axios";
//query string de chuyen doi object thanh quey
import queryString from 'query-string'
import Cookies from 'universal-cookie'
const cookies = new Cookies();
// const token = cookies.get('accessToken')
export const baseUrl = 'https://fake-server-app16111994.herokuapp.com/';





export const instance = axios.create({
    baseURL: 'http://localhost:3001',
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