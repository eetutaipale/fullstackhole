import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setBadClick = () => {
    setBad(bad + 1)
  }
  const setNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const setGoodClick = () => {
    setGood(good + 1)
  }
  return (
    <div>
    <h1>
      give feedback
    </h1>
    
    <button onClick={setGoodClick}>good</button>
    <button onClick={setNeutralClick}>neutral</button>
    <button onClick={setBadClick}>bad</button>


    <h2>
      statistics
    </h2>
      <p>good {good} </p> 
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {((good*1) + (bad * -1) + (neutral* 0)) / (good+bad+neutral)}</p>
      <p>positive {((good)/(good+bad+ neutral)) * 100 } %
      </p>

    
     
    </div>
   

  
    
  )
}

export default App