import axios from 'axios'
/**
 *  异步请求函数
 * @return promise 对象
 */
export default function ajax(url, data={}, type="GET"){
    //执行异步ajax请求
    return new Promise((resolve,reject) => {
        let promise
        if (type === "GET") {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.indexOf('&'))
                url = url + '?' + dataStr
            }
            //发送get请求
            promis = axios.get(url)
        }else{
            //发送post请求
            promise = axios.post(url,data)
        }

        //成功/失败
        promis.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}