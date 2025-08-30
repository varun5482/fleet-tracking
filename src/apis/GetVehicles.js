import axios from 'axios';
import API_PATH from './ApiPath';

const GetVehicles = async (payload = {}) => {
    let url = API_PATH.VEHICLES_DATA;
    if (!(!payload?.status || payload?.status === 'all')) {
        url = `${url}/status/${payload.status}`
    }
    const response  = await axios.get(url);
    return response;
}

export default GetVehicles;