import { createSlice } from "@reduxjs/toolkit";
import { getStatisticsAction, getVehiclesAction } from "../Actions/dashboard";

const initialState = {
    liveUpdates: true,
    vehicles: {
        data: [],
        count: 0,
        loading: 'unset'
    },
    filters: '',
    stats: {
        data: {},
        loading: 'unset'
    },
    lastUpdated: ''
}


const dashBoardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
        toggleLiveUpdates: (state) => {
            state.liveUpdates = !state.liveUpdates;
        },
        setFilters: (state, { payload }) => {
            state.filters = payload;
        },
        setSocketData: (state, { payload }) => {
            const { data, timestamp } = payload;
            let _filteredData = data;
            if (state.filters) {
                _filteredData = _filteredData?.filter((filterData) => filterData.status === state.filters);
            }
            state.vehicles.loading = 'loaded';
            state.vehicles.data = _filteredData;
            state.lastUpdated = timestamp;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getVehiclesAction.pending, (state, { meta }) => {
            state.vehicles.loading = 'loading';
        });
        builder.addCase(getVehiclesAction.fulfilled, (state, { payload }) => {
            state.vehicles.loading = 'loaded';
            state.vehicles.data = payload?.data?.data || [];
            state.vehicles.count = payload?.data?.total;
        });
        builder.addCase(getVehiclesAction.rejected, (state, { payload }) => {
            state.vehicles.loading = 'failed';
            state.vehicles.data = [];
        });
        builder.addCase(getStatisticsAction.pending, (state, { meta }) => {
            state.stats.loading = 'loading';
        });
        builder.addCase(getStatisticsAction.fulfilled, (state, { payload }) => {
            state.stats.loading = 'loaded';
            state.stats.data = payload?.data?.data || {};
        });
        builder.addCase(getStatisticsAction.rejected, (state, { payload }) => {
            state.vehicles.loading = 'failed';
            state.vehicles.data = {};
        });
    }
});

export const { toggleLiveUpdates, setFilters, setSocketData } = dashBoardSlice.actions;

export default dashBoardSlice.reducer;