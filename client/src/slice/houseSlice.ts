import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getHouses } from "../thunk/thunkActionsHouse";
import { HouseType } from "../type";



interface HouseState {
    houses: HouseType[];
    loader: boolean;
    error: string | undefined;
}

const initialState: HouseState = {
    houses: [],
    loader: false,
    error: '',
}
export const houseSlice = createSlice({
    name: "houseSlice",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(
            getHouses.fulfilled,
            (state, action: PayloadAction<HouseType[]> ) => {
                state.houses = action.payload;
                state.loader = false;
            }
        );
        builder.addCase(getHouses.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(getHouses.rejected, (state, action) => {
            state.error = action.error.message
        });
    }
})