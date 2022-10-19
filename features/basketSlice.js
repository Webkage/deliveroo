import { createSlice, } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    value: []
  },
  reducers: {
    addToBasket: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state,action) => {
      state.value -= 1
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = state => state.basket.items

export default basketSlice.reducer