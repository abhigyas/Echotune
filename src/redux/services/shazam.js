import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
       //two apis because of monthly hard limit
        //baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam/',
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', 'cd796eaf58msh57e5eedeb2f72c6p1e7869jsne37fb7ca224c');
            
            return headers;
        },
    }),
        endpoints:(builder) =>({
           //getTopCharts: builder.query({query: () => '/top_tracks_country?country_code=US&limit=50'})
            getTopCharts: builder.query({query: () => '/charts/track'})
        })
    }); 

    export const{
        useGetTopChartsQuery,
    } = shazamApi;