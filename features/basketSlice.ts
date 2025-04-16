import { createSlice } from '@reduxjs/toolkit';

export interface BasketState {
  items: any[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      const newBasket = [...state.items];

      // 移除 item
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Basket with id ${action.payload.id} not found`);
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: any) => state.basket.items;
export const selectBasketItemsWithId = (state: any, id: string) =>
  state.basket.items.filter((item: any) => item.id === id);
export const selectBasketTotal = (state: any) =>
  state.basket.items.reduce((total: number, item: any) => {
    return (total += item.price);
  }, 0);

export default basketSlice.reducer;
