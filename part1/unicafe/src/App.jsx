import { useState } from "react";

import "./App.css";
const Statistics = (props) => {

}


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Statistics = (props) => {
    
  }

  return (
    <div>
       <StatisticLine text="good" value ={2} />
      <StatisticLine text="neutral" value ={1} />
      <StatisticLine text="bad" value ={0} />
    </div>
  )
};

export default App;
