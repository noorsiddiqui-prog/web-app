import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


export const getPlacesData = async (type, bounds) => {
    console.log("sw, ne", bounds.sw, bounds.ne);
    try {
        // const response = await axios.get(URL, options);
        const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
            //   bl_latitude: '11.847676',
            //   bl_longitude: '108.473209',
            //   tr_longitude: '109.149359',
            //   tr_latitude: '12.838442',

              bl_latitude: bounds.sw.lat,
              bl_longitude: bounds.sw.lng,
              tr_longitude: bounds.ne.lng,
              tr_latitude: bounds.ne.lat,
              
            },
            headers: {
              'X-RapidAPI-Key': '51f2ca5c0cmsh56f626982708114p1b9278jsn2b7c938bd7dd',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }
            
            );
        return data;
    } catch (error) {
        console.log(error);
    }
}