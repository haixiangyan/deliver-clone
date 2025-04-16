import { createSlice } from '@reduxjs/toolkit';

export interface RestaurantState {
  restaurant: {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    long: number;
    lat: number;
  };
}

const initialState: RestaurantState = {
  restaurant: {
    id: '',
    imgUrl: '',
    title: '',
    rating: 0,
    genre: '',
    address: '',
    short_description: '',
    dishes: [],
    long: 0,
    lat: 0,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
