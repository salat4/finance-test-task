import './App.css';
import { io } from "socket.io-client";
import { useGetFinanceQuery,useAddFinanceMutation } from './redux/financeSlice';
const socket = io("http://localhost:4000/");


function App() {
  const { data, isLoading } = useGetFinanceQuery()
  const [addFinance] = useAddFinanceMutation()
  console.log(data)
  socket.emit("start");
  socket.on("ticker", (res)=>{
    addFinance(res)
  })

  return (
   <> 
   
   </>
  );
}

export default App;
