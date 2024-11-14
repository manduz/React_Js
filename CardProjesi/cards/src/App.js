
import 'bulma/css/bulma.css'
import './App.css';
import  Course  from './Course';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Kompleweb from './images/kompleweb.jpg'
import Csharp from './images/ccsharp.png'


function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Öğrendiklerim</p>
          </div>
      </section>
      <div className = 'container'>

        <section className='section'>
            <div className = 'columns'>
              
              <div className= 'column'>
                  <Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias delectus unde, iste fugiat velit, labore qui officia fugit quam tempora nobis laborum laudantium adipisci ut nam eveniet voluptate voluptatibus."/>
              </div>
              <div className= 'column'>
                  <Course image={Bootstrap} title="Bootstrap 5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias delectus unde, iste fugiat velit, labore qui officia fugit quam tempora nobis laborum laudantium adipisci ut nam eveniet voluptate voluptatibus."/>
              </div>
              <div className= 'column'>
                  <Course image={Kompleweb} title="Komple Web" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias delectus unde, iste fugiat velit, labore qui officia fugit quam tempora nobis laborum laudantium adipisci ut nam eveniet voluptate voluptatibus."/>
              </div>
              <div className= 'column'>
                  <Course image={Csharp} title="C#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias delectus unde, iste fugiat velit, labore qui officia fugit quam tempora nobis laborum laudantium adipisci ut nam eveniet voluptate voluptatibus."/>
              </div>
            </div>
        </section>
        
       
      </div>       
    </div>
  );
}

export default App;
