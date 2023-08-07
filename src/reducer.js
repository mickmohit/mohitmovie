import React from 'react'

export const reducer = (state, action) => {

  switch(action.type){

    case "GET_MOVIE" :
        return {
            ...state, //keep previous state data as it is, via ..spread operator
            search:  action.payload.search,
            total: action.payload.total,
        }

  }

  return state;
}
