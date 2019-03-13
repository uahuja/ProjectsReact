import axios from 'axios';

export default axios.create( {
    baseURL : 'https://api.unsplash.com',
    headers : {
                Authorization: "Client-ID cd0283053718846c197c5bf013cd6b3546769df25289d6387e757b686357bdf6" 
            }
        });

