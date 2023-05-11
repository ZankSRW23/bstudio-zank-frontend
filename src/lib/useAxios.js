import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'

const baseUrl = "https://drab-cyan-shrimp-cap.cyclic.app";

const useAxios = axios.create({
    baseURL: baseUrl,
});

export default useAxios;