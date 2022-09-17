import axios from 'axios'
import { showAlert } from './alerts'

export const getAllShopDatas = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:1000/api/v1/shopdata'
        })

        const newdatas = res.data.data.shopdatas
        // console.log(newdatas)
        return newdatas
    } catch (err) {

        showAlert('error', '请重新尝试')
    }
}
