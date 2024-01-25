import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam/',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', '861e75ac51msh136447bf360b4e6p1e0e8ejsn66698c226405');
            
            return headers;
        },
    }),
        endpoints:(builder) =>({
           getTopCharts: builder.query({query: () => '/top_tracks_country?country_code=US&limit=50'})
        })
    }); 

    export const{
        useGetTopChartsQuery,
    } = shazamApi;