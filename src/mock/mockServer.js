import Mock from 'mockjs'
import data from './data.json'

//返回商品接口
Mock.mock('/goods', {code: 0, data: data.goods})
//返回rating接口
Mock.mock('/rating', { code: 0, data: data.ratings })
//返回info接口
Mock.mock('/shop_info', { code: 0, data: data.info })
