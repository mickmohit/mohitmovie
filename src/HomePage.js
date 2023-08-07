import React, { useContext } from 'react'
import { AppContext } from './context';
import { useGlobalContext } from './context';
import { Movies } from './Movies';
import {Search} from './Search';

export const HomePage = () => {
    //const name= useContext(AppContext); //consumer--old way of calling consumer context
   // const name= useGlobalContext(); //consumer
  return (
    <>
    <div>
        
        <Search />
        <Movies />
    </div>
 
    </>
  )
}
