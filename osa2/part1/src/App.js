
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 28,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
      return (
        <div>
          <Course course={courses} />
        </div>
      )
    }
    const Course = (course) => {
      
  
      const Content = (props) => {
        return (
        <div>
            {props.partes.map(par =>
            <Part key ={par.id} part={par} />
            )}
        </div>
        )

        }
        const Part = (props) => {

          return (
              
              <div>
              <p>
              {props.part.name} {props.part.exercises} 
              </p>
              </div>
          )
          }


        const Total = (props) => {
            const total = props.total.reduce( (s, p) => {return s + p.exercises;}, 0);

              return (
              <>
              <h4>
                  total of {total} exercises 
              </h4>
              </>
              )
        }


        const Header = (props) => {

              return (
                  <div>
                  <h2>
                  {props.courses.name} 
                  </h2> 
                  </div>
              )

        }

      return (
          <><h1>
              Web debelopment curriculum
          </h1>
          <div>
          {course.course.map((cours, cours2, cours3) => <><Header key={cours.id} courses={cours} />
              <Content key={cours2.id} partes={cours.parts} />
              <Total key={cours3.id} total={cours.parts} />
          </>)}
          </div></>
          )
    }

export default App