
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

import './Course.css';

const courseMap ={
    // Angular:Angular,
    // Bootstrap:Bootstrap,
    // Ccsharp:Ccsharp,
    // KompleWeb:Kompleweb
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb,
}

function Course({courseName}) {
   // console.log(Angular);
   // console.log(courseName);
    console.log(courseMap[courseName]);
    return (
    <div className='courseDiv'>
        <img className='image' src={courseMap[courseName]} alt = "course"/>
    </div>
    );
}

export default Course;