import axios from 'axios'
import { showAlert } from './alerts'


export const login = async ({email, password}) => {
    
    try {
       
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/user/login',
            data: {
                email,
                password
            }
           
        })

        const UserArr = res.data.data.user
        
        Object.keys(UserArr).forEach(el => localStorage.setItem(el, UserArr[el]))

        if(res.data.status === 'success'){

            const cookie = 'jwt=' + res.data.token
            window.document.cookie = cookie
            showAlert('success', '登录成功')
            window.setTimeout(() => {
                window.location.reload(true)
                window.location.assign('/')
            }, 1500)
        }
        return UserArr
    }catch(err){
        showAlert('error', err.response.data.message)
    }
}

