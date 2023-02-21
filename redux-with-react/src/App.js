import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/index";
import { decrement } from "./actions/index";


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter} </h1>

      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

      <br></br>

      { isLogged ? <h3>If you see this heading, you are logged in!</h3> : 'Not logged in!'}
      
    </div>
  );
}

export default App;
