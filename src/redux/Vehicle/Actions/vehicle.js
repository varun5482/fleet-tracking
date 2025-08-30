import { createAsyncThunk } from "@reduxjs/toolkit";
import GetVehicleDetail from "../../../apis/GetVehicleDetail";

const getVehicleDetailAction = createAsyncThunk(
    'vehicles/getVehicleDetil',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await GetVehicleDetail(payload);
            return response;
        } catch(err) {
            return rejectWithValue(err);
        }
    }
)


export { getVehicleDetailAction }

