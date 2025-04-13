import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchProduct = async ()=>{
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
};

export const useProducts = ()=>{
    return useQuery({
        queryKey:['products'],
        queryFn:fetchProduct,
    })
}