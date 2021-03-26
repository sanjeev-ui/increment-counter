import react, {useState} from "react";
import './App.css';

const App = () => {
  const[count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count +1);
  };
  return(
    <div>
    
    <label>
    <h1> {count} </h1>
    <button onClick = {IncNum}> Click Me </button>
    </label>
    </div>
  );
};
export default App;