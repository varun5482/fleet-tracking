import axios from 'axios';
import API_PATH from './ApiPath';

const GetStatistics = async (_) => {
    const response  = await axios.get(API_PATH.STATISTICS);
    return response;
}

export default GetStatistics;