
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './DataReducer';

const store =configureStore({
    reducer: {
        data:  reducer
    }
})


export default store