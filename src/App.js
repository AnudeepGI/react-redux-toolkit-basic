import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { dec, inc, inc10 } from './CounterSlice';

import SimpleApp from './SimpleApp';


function App() {
  let count = useSelector((state) =>  state.value );
  let dispatch = useDispatch();

  return (
    <div className="App">
      {count}
      <button onClick={()=>{dispatch(inc())}}>
        Add
      </button>
      <button onClick={()=>{dispatch(dec())}}>
        reduce
      </button>
      <button onClick={()=>{dispatch(inc10(10))}}>
        add 10
      </button>
      <br/>
      <div className='border'>
        <SimpleApp/>
      </div>
    </div>
  );
}

export default App;
