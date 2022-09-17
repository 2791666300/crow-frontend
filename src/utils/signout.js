
import axios from 'axios'
import { showAlert } from './alerts'

export const logOut = async () => {
    try{
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:1000/api/v1/user/logout'
        })
        const cookie = 'jwt=' + null
        document.cookie = cookie

        // eslint-disable-next-line
        if(res.data.status = 'success') {
            showAlert('success', '注销成功')
            window.setTimeout(() => {

                window.location.reload(true) // 从服务器重新刷新，
            }, 1500)
        }
        
        return res.data.data
    }catch(err){
       
        showAlert('error', '请重新尝试')
    }
}

