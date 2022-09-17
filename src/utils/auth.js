import axios from 'axios'
import { showAlert } from './alerts'


export const auth = async (data) => {

    try {

        const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/user/auth',
            data: data
        })

        const UserArr = res.data.data.user
        return UserArr
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
}


