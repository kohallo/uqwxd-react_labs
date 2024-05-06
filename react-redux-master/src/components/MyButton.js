import React from 'react'
import { useDispatch } from 'react-redux';
import increment from '../actions'

const MyButton = () => {
  // useDispatch dispatchese event to teh store and finds out what action is to be taken and uses the right reducer to do the same
  let dispatch = useDispatch();
  return (
    <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
  );
}

export default MyButton;