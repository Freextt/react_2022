import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services/car.services";

const initialState = {
    cars: [],
    create: null,
    errors: null
};
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carServices.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car},{rejectWithValue})=> {
        try {
          const {data} = await carServices.create(car);
          return data;
        }catch (e){
          return rejectWithValue(e.response.data);
        }
    }
)
const remove = createAsyncThunk(
    'carSlice/delete',
    async ({id},{rejectedWithValue})=>{
        try {
            const {data} = await carServices.deleteById(id);
            return data;
        }catch (e){
            return rejectedWithValue(e.response.data);
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(remove.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=>car.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected'){
                    state.errors = action.payload
                }else {
                    state.errors = null
                }
            })
});

const {reducer: carReducer,actions: {setCreate}} = carSlice;
const carActions = {
    getAll,
    setCreate,
    create,
    remove
}
export {
    carReducer,
    carActions
}