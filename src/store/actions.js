import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_TYPE,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATING,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
} from './mutation-types'
import {
    reqAddress,
    reqFoodTypes,
    reqShopList,
    reqShopInfo,
    reqShopRating,
    reqShopGoods,
} from '../api'

export default {
    //异步获取地址
    getAddress({ commit, state }) {
        //发送ajax请求
        const geohash = state.latitude + ',' + state.longitude
        return new Promise((resolve, reject) => {
            reqAddress(geohash).then(response => {
                if (response.code === 0) {
                    const address = response.data
                    commit(RECEIVE_ADDRESS, { address })
                }
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })

    },
    //异步获取食品分类
    getType({ commit }) {
        //发送ajax请求
        return new Promise((resolve, reject) => {
            reqFoodTypes().then(response => {
                if (response.code === 0) {
                    const type = response.data
                    console.log(type);

                    commit(RECEIVE_TYPE, { type })
                }
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    //异步获取商家列表
    getShops({ commit, state }) {
        //发送ajax请求
        const { longitude, latitude } = state
        return new Promise((resolve, reject) => {
            reqShopList(longitude, latitude).then(response => {
                if (response.code === 0) {
                    const shops = response.data
                    commit(RECEIVE_SHOPS, { shops })
                }
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    async getXXX({ commit }) {

    },
    //获取商品信息
    getShopGoods({ commit }) {
        return new Promise((resolve, reject) => {
            reqShopGoods().then(response => {
                if (response.code === 0) {
                    const goods = response.data
                    commit(RECEIVE_GOODS, { goods })
                    resolve(response)
                } else {
                    reject()
                }
            }).catch(error => {
                reject(error)
            })
        })
    },
    //获取评价信息
    getShopRating({ commit }) {
        reqShopRating().then(response => {
            const rating = response.data
            commit(RECEIVE_RATING, { rating })
        })
    },
    //获取商家信息
    getShopInfo({ commit }) {
        reqShopInfo().then(response => {
            const info = response.data
            commit(RECEIVE_INFO, { info })
        })
    },
    //更新商品购物数量
    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, { food })
        } else {
            commit(DECREMENT_FOOD_COUNT, { food })
        }
    },
    clearCart({ commit }) {
        commit(CLEAR_CART)
    }
}