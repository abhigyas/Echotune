import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api7.p.rapidapi.com/',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', 'cd796eaf58msh57e5eedeb2f72c6p1e7869jsne37fb7ca224c');
            
            return headers;
        },
    }),
        endpoints:(builder) =>({
            getTopCharts: builder.query({query: () => '/charts/get-top-songs-in-world?limit=50'})
        })
    }); 

    export const{
        useGetTopChartsQuery,
    } = shazamApi;