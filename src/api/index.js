/**
 * 接口请求函数s
 * @return promise对象
 */

//引入异步请求函数
import ajax from './ajax.js'
const BASE_URL = 'http://localhost:8080'
/**
 * API http://localhost:3000/position/40.10038,116.36867
 * 根据经纬度获取位置详情
 * @param {经纬度} geohash 
 */
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position`) 

/**
 * API http://localhost:3000/index_category
 * 获取食品分类列表
 */
export const reqFoodTypes = () => ajax(`${BASE_URL}/index_category`)

/**
 * API http://localhost:3000/shops?latitude=40.10038&longitude=116.36
 * 根据经纬度获取商铺列表
 */
export const reqShopList = (latitude, longitude) => ajax(`${BASE_URL}/shops`,{
    latitude,longitude
})

/**
 * 请求商家信息
 */
export const reqShopInfo = () => ajax(`/shop_info`)
/**
 * 请求评价信息
 */
export const reqShopRating = () => ajax(`/rating`)
/**
 * 请求商品信息
 */
export const reqShopGoods = () => ajax(`/goods`)