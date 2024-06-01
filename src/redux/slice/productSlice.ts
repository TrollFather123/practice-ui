import { axiosInstance } from "@/api/axiosInstance"
import { Product } from "@/components/ProductCard/ProductCard";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const initialState = {
    status:'idle',
    allProducts:[] as Product[],
    isLoading:true
}

export const getAllPropducts = createAsyncThunk("allProducts",async()=>{
    const res = await axiosInstance.get('products');
    return res?.data
})



export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllPropducts.pending,(state,action)=>{
            state.status = 'idle'
            state.isLoading = true
        })
        .addCase(getAllPropducts.fulfilled,(state,{payload})=>{
            state.status = 'success'
            if(payload.status === "SUCCESS"){
                state.allProducts = payload.products
                state.isLoading = false
            }
           
        })
        .addCase(getAllPropducts.rejected,(state,action)=>{
            state.status = 'idle'
            state.isLoading = true
        })
    }
})


export const {} = productSlice.actions;

export default productSlice.reducer