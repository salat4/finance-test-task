import './App.css';
import { io } from "socket.io-client";
import {  useDispatch } from 'react-redux'
import { finance } from './redux/financeSlice';
import { useEffect } from 'react';
// import { useGetFinanceQuery,useAddFinanceMutation } from './redux/financeSlice';
const socket = io("http://localhost:4000/");


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    socket.emit("start");
    socket.on("ticker", (res)=>{
      dispatch(finance(res))
    })
  },[dispatch])
//  console.log(dispatch(finance()))
  // console.log(count)
// dispatch(finance({zxc:123}))
  return (
   <> 
   
   </>
  );
}

export default App;
