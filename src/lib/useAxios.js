import axios from 'axios';

const baseUrl = "https://drab-cyan-shrimp-cap.cyclic.app";

const useAxios = axios.create({
    baseURL: baseUrl,
});

export default useAxios;