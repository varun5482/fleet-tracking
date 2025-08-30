import { createSlice } from "@reduxjs/toolkit";
import { getVehicleDetailAction } from "../Actions/vehicle";

const initialState = {
    id: '',
    data: {},
    loading: 'unset'
}

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers: {
        setModalOpenStatus: (state, { payload }) => {
            return {
                ...state,
                id: payload,
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getVehicleDetailAction.pending, (state, { payload }) => {
            state.loading = 'loading';
        });
        builder.addCase(getVehicleDetailAction.fulfilled, (state, { payload }) => {
            state.loading = 'loaded';
            state.data = payload?.data?.data || {};
        });
        builder.addCase(getVehicleDetailAction.rejected, (state, { payload }) => {
            state.loading = 'failed';
            state.data = {};
        });
    }
});

export const { setModalOpenStatus } = vehicleSlice.actions;

export default vehicleSlice.reducer;