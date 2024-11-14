import React from 'react'

//propslar bir objede tutuluyor
//  export const Course = () => {
//    return (
//      <div>Course Div</div>
     
//    )
//  };


//function Course(props) {
 function Course({ title,description}) {
 //   console.log(props);
    // const title = props.title;
    // const description = props.description;


//    const { title,description} = props;

     return (
        <div>
            {/* <div>{props.title}</div>
            <div>{props.description}</div> */}
            <div>{title}</div>
            <div>{description}</div>
        </div>
    
     );
   
 }

 export default Course;
