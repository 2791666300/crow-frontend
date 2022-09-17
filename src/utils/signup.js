import axios from 'axios'
import { showAlert } from './alerts'

export const SignUp = async (objects) => {
    
    try {
        console.log(objects)
       
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/user/signup',
            data: objects
        })

        
        const UserArr = res.data.data.user
        Object.keys(UserArr).forEach(el => localStorage.setItem(el, UserArr[el]))
        if(res.data.status === 'success'){
            showAlert('success', '注册成功')
        }
        return UserArr
    }catch(err){
        showAlert('error', err.response.data.message)
    }
}


