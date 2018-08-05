export default {
    totalCount(state) {
        return state.Cart.reduce((preTotal, food) => preTotal + food.count,0)
    },

    totalPrice(state) {
        return state.Cart.reduce((preTotal, food) => preTotal + food.count*food.price,0)
    }
}