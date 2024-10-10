// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  );
};
const Total = (props) => {
  console.log(props);
  return <div></div>;
};

const App = () => {
  const course  = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  
  ]
  }
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      <Header course={course} />
      <Content parts ={parts} />
      <Total parts={parts}/>
    </div>
  );
};

export default App;
