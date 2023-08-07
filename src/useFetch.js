import React, { useContext, useEffect, useState, useReducer } from 'react';
import { reducer } from './reducer';

export const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
//const API_URL=`http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;

const useFetch = (apiParams) => {

    //here we are using contextAPi with useState hook
    const[isLoading, setIsLoading] = useState(true);
    const[movie, setMovie] = useState([]); // empty array initi..
    const[isError, setIsError] = useState({ show: "false", msg:""});

    const initialState = {search:[], total:0};
    const[state, dispatch] = useReducer(reducer,initialState);
    
    {  console.log("hello-1")}
    {console.log(state)}
    const getMovie = async(url) => {
        setIsLoading(true);
        try{
            const res = await fetch(url);  //use await to get promise as resp will come in some time
            const data= await res.json();
            console.log(data);
    
            if(data.Response === 'True') //here .Response is field from api resp
            {
                setIsLoading(false);
                setIsError({show:false, msg:""});
                setMovie(data.Search || data); //here .Search is field array from api resp

                dispatch({
                    type: "GET_MOVIE",
                    payload: {
                        search: data.Search,
                        total: data.totalResults,
                    },
                })

            }else{
                setIsError({show:true, msg:data.Error});
            }
    
        }catch(error){
            console.log(error);
        }
    };

//passing query in second param so that query input value can be updated everytime
//debounce--means only get one time response, instead of getting response on every keyword search. for this use
//clear function in useEffect in context.
   // debouncing in react js
   useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, isError, movie , state};
};

export default useFetch
