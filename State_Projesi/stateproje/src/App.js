
import Course from './Course.js';
import './App.css';
import {useState} from 'react';

function getRandomCourse()
{
  const courseArray = ['Angular','Bootstrap','Ccsharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}


function App() 
{

  const [courses, setCourses] = useState([]);

  const handleClick = () =>{
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList =  courses.map((courses,index) =>{
     return  <Course key={index} courseName={courses}/>
    });

  return(
    <div className="App">
      <button className='appButton' onClick = {handleClick}> Kurs Ekle</button>
      <div className='courseList'>{courseList}</div>
      <Course />
    </div>
  );
  
}

export default App;
