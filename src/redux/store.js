import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './Dashboard/Slices/dashboard';
import vehicleReducer from './Vehicle/Slices/vehicle';


const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        vehicle: vehicleReducer
    },
});

export default store;