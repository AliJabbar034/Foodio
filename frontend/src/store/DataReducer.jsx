import { createSlice } from '@reduxjs/toolkit';

const data={
    cartData:[],
    user:{},
    reservationData:{},
    
}

const dataReducer =createSlice({
    name:"data",
    initialState:data,
    reducers:{
        addToCart: (state,action)=>{
            console.log("addToCart", action.payload)
            const exist = state.cartData.filter(c => c.item.title===action.payload.item.title)
            if(exist.length===0){
                state.cartData.push(action.payload)
            }else{
                state.cartData.map((item,i)=>{
                    if(item.item.title===action.payload.item.title){
                        state.cartData[i].quantity++
                    }
                })
            }

        
        },
        removeFromCart: (state,action)=>{
            console.log( action.payload);
          const  found =state.cartData.filter((item)=>{
                return item.item.title===action.payload.name
            })
            console.log(found);
            if (found.length > 0 && found[0].quantity > 1) {
                found.map((item,i)=>{
                    if(item.item.title===action.payload.name){
                        state.cartData[i].quantity--
                    }
                })
            }
            else if (found.length > 0 && found[0].quantity==1){
                found.map((item,i)=>{
                    if(item.item.title===action.payload.name){
                        state.cartData.splice(i,1)
                    }
                })
            }
            else if (found.length === 0) {
              return 
            }
        },
        getUser:(state, {payload})=>{
           
            state.user=payload
        },
        getRes:(state, {payload})=>{
           
            state.reservationData=payload
        },
        userData:(state, {payload})=>{
            state.user=payload
        }

    }
})

export const reducer =dataReducer.reducer;
export const actions = dataReducer.actions