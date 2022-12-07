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

const Course = (course) => {

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
export default Course





