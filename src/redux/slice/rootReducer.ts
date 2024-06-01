import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "./productSlice";

const productSlicePersistConfig = {
    key: 'productSlice',
    storage,
  }


export const rootReducer = {
    productSlice: persistReducer(productSlicePersistConfig, productSlice)
}
