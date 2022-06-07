import axios from "axios";

const baseUrl = 'https://fake-server-app16111994.herokuapp.com/';

export const getData = async (key, obj) => {
    try {
        console.log(obj)
        console.log(`${baseUrl}${key}`)
        //get lastpagePagination  = resource.length/item_on_page khi chua co backend, chua biet chieu dai mang toan bo la bao nhieu
        // khi di lam that thi se hoi Backend so nay va fix
        let countPage = await axios.get(`${baseUrl}${key}`)
        console.log(`${baseUrl}${key}?_limit=${obj.limit}&_page=${obj.offset}&${obj.price}`)
        let data1 = await axios.get(`${baseUrl}${key}?_limit=${obj.limit}&_page=${obj.offset}&${obj.price}`)
        console.log(data1)
        return { data: data1.data, countPage: countPage.data.length }

    }
    catch (error) {
        console.log(error)
    }


}

