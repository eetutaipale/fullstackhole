const Content = (props) => {
  console.log(props)
  return (
  
  
  <div>
  <Part part ={props.parts[0]} />
  <Part part ={props.parts[1]} />
  <Part part ={props.parts[2]} />
  </div>
)

}
const Part = (props) => {
  
  return (
    <div>
      <p>
      {props.parts} {props.exercises}
      </p>
    </div>
  )
}
const Total = (props) => {
  
 return [
  <>
  <p>
    Number of exercises {props.parts(exercises[0])}
  </p>
  </>
 ]
}
const Header = (props) => {
  
  return (
    <div>
    <h1>
      {props.course} 
    </h1> 
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
        <Header course={course} />
        
        <Content parts={parts}/>
        <Total parts={parts} />
    </div>
  )
}

export default App;
