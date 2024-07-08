import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {items: [], totalAmount: 0, totalCount: 0}

const refreshTotalAmountAndTotalCount = (state) => {
    state.totalAmount = 0
    state.totalCount = 0
    state.items.map(item => {
        state.totalCount += item.count
        state.totalAmount += item.priceWithDiscount !== 0 ? item.priceWithDiscount * item.count : item.price * item.count
    })
    return state
}

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: INITIAL_STATE,
    reducers: {
        addItem(state, action) {
            state.items.push({...action.payload, count: 1})
            return refreshTotalAmountAndTotalCount(state)
        },
        removeItem(state, action) {
            state = {items: state.items.filter(item => item.id !== action.payload)}
            return refreshTotalAmountAndTotalCount(state)
        },
        increaseItem(state, action) {
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count++
                }
            })
            return refreshTotalAmountAndTotalCount(state)
        },
        decreaseItem(state, action) {
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count--
                }
            })
            return refreshTotalAmountAndTotalCount(state)
        }
    }
})

export const {addItem, removeItem, increaseItem, decreaseItem} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer