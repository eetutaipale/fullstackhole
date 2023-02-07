import { useState } from 'react'

const Statistics = (props) => {
  if (props.Gll.length === 0) {
    return (
    <div>
      No feedback given
    </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value ={props.g} />
      <StatisticLine text="neutral" value ={props.n} />
      <StatisticLine text="bad" value ={props.b} />
      <StatisticLine text="all" value ={props.g + props.b + props.n} />
      <StatisticLine text="average" value =
      {((props.g*1) + (props.b * -1) + (props.n* 0)) / (props.g+props.b+props.n)} />
      <StatisticLine text="positive" value ={((props.g)/(props.g+props.b+ props.n)) * 100 } mark ={"%"}  /> 
    </div>
  )
}
const Button = ({handleClick, text}) => { 
  return (
  <button onClick={handleClick}> 
  {text}  
  </button>
  )
}
const StatisticLine = (props) => { 
  return (
    <div>
      {props.text} {props.value} {props.mark}
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  

  const setBadClick = () => {
    setBad(bad + 1)
    setAll(all.concat(''))
  }
  const setNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all.concat(''))
  }
  const setGoodClick = () => {
    setGood(good + 1)
    setAll(all.concat(''))
  }
  const statistics = () => {

  }
 


  return (
    <div>
    <h1>
      give feedback
    </h1>
    <Button handleClick={setGoodClick} text='good' ></Button>
    <Button handleClick={setNeutralClick} text='neutral' ></Button>
    <Button handleClick={setBadClick} text='bad' ></Button>
    <h1>
      statistics
      
    </h1>
      <Statistics Gll={all} g = {good} b = {bad} n = {neutral} />
    </div>
  )
}

export default App