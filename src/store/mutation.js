import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_TYPE,
    RECEIVE_INFO,
    RECEIVE_RATING,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
} from './mutation-types'


export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECEIVE_TYPE](state, { type }) {
        state.type = type
    },
    [RECEIVE_INFO](state, {info}){
        state.info = info
    },
    [RECEIVE_RATING](state, {rating}){
        state.rating = rating
    },
    [RECEIVE_GOODS](state, {goods}){
        state.goods = goods
    },
    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){
            Vue.set(food, 'count', 1)
            state.Cart.push(food)
        }else{
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state,{food}){
        if(food.count <= 0){
            food.count = 0
        }else{
            food.count--
            if(food.count === 0){
                state.Cart.splice(state.Cart.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        state.Cart.forEach(food => {
            food.count = 0
        });
        state.Cart = []
    }
}