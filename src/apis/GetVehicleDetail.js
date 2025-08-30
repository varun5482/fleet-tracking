import axios from 'axios';
import API_PATH from './ApiPath';

const GetVehicleDetail = async (payload = {}) => {
    let url = API_PATH.VEHICLE_DETAIL.replace('{{ID}}', payload?.id || '');
    const response  = await axios.get(url);
    return response;
}

export default GetVehicleDetail;