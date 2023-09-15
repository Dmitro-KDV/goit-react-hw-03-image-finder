import axios from "axios";

const url = 'https://pixabay.com/api/';
const api_key = '38325777-12f57d8108d1a43c6a779e8ee';

export function getImage(searchText, page=1) {
    return axios.get(url,{
        params: {
            key: api_key,
            q: searchText,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: page,
            per_page: 12,
        }
    })
}