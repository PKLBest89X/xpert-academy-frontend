import { useQuery } from 'react-query';
import axios from 'api/axios';

type UserInfoType = {

}

export const useGetProvince = () => {
    return useQuery<any, any>("getProvince", async () => {
        const getProvince = await axios.get("provinces");
        return getProvince.data;
    })
}