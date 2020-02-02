import axios from 'axios'
import * as Config from './../constant/config'
export default (endpoint, method, data) => {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: data
    }).catch(err=>{
        console.log(err)
    })

}