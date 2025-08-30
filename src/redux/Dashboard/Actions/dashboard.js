import { createAsyncThunk } from "@reduxjs/toolkit";
import GetVehicles from "../../../apis/GetVehicles";
import GetStatistics from "../../../apis/GetStatistics";

const getVehiclesAction = createAsyncThunk(
    'vehicles/getVehicles',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await GetVehicles(payload);
            return response;
        } catch(err) {
            return rejectWithValue(err);
        }
    }
)


const getStatisticsAction = createAsyncThunk(
    'vehicles/getStatistics',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await GetStatistics();
            return response;
        } catch(err) {
            return rejectWithValue(err);
        }
    }
)

export {
    getVehiclesAction,
    getStatisticsAction,
}

