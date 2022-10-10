import { useState } from 'react'

const Section = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  
  const good = props.stats[0]
  const neutral = props.stats[1]
  const bad = props.stats[2]

  if (props.feedback === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <Stat text="good" number={good}/>
          <Stat text="neutral" number={neutral}/>
          <Stat text="bad" number={bad}/>
          <Stat text="all" number={good + neutral + bad}/>
          <Stat text="average" number={(good - bad) / (good + neutral + bad)}/>
          <Stat text="positive" number={good / (good + neutral + bad) * 100 + "%"}/>
        </tbody>

      </table>




    )
  }
} 

const Stat = (props) => {
    return (
      <tr><td>{props.text}</td><td>{props.number}</td></tr>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = [good, neutral, bad]

  return (
    <div>
      <Section text="give feedback"/>
      <Button text="good" onClick={() => setGood(good + 1)}/>
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" onClick={() => setBad(bad + 1)}/>
      <Section text="statistics"/>
      <Statistics stats={stats} feedback={good+bad+neutral}/>
    </div>
  )
}

export default App