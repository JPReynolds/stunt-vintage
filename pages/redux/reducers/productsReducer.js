import { BRANDS, CLOTHING } from "../../constants";

const initialState = {
  brands: BRANDS,
  clothing: CLOTHING,
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
