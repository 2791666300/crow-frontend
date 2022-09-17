import axios from 'axios'
import { showAlert } from './alerts'


export const importDatas = async (datas) => {
    
    try {
       
       const res = await axios({
            method: 'POST',
            url: 'http://localhost:1000/api/v1/shopdata',
            data: datas
           
        })
        console.log(res)
        showAlert('success', '成功写入数据库')

    }catch(err){
        showAlert('error', err.response.data.message)
    }
}

