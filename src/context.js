import React, { useContext, useEffect, useState } from 'react';
import useFetch from "./useFetch";

const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
//const API_URL=`http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;

//context
const AppContext = React.createContext();

//provider
const AppProvider = ({children}) => {

    //here we are using contextAPi with useState hook
    const [query, setQuery] = useState("titanic");
    const { isLoading, isError, movie , state} = useFetch(`&s=${query}`);

//passing values from parent to child using context Api
   return <AppContext.Provider value={{query, movie, setQuery, isLoading, isError, state}}> 
       {children}
   </AppContext.Provider>
}

//consumer in Homepage by using useContext()

//global custom hooks
const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalContext};

