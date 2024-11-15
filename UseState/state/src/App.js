
import {useState} from 'react';
import './App.css';
//Bir bileşenin içinde değişebilen (dinamik) bir veri veya durum tutmak istediğinizde useState kullanılır. Örneğin, kullanıcı etkileşimlerine göre değişen bir değer (butona tıklama sayısı, form girdileri, açılıp kapanan bir menü gibi) için kullanılır.

function App() {
  //value başlangıç değeridir ve sıfır'dır value = 0
  
  const [value, setValue] = useState(0);
  const handleClick = () =>{
    setValue(value+1);
  }
  return (
    <div className="App">
      <button onClick = {handleClick}>Kurs ekle</button>
      {/* <button onClick = {()=>{
        console.log('emek')}}
        >Kurs ekle</button> */}
      <div>Kurs sayısı: {value}</div>
    </div>
  );
}

export default App;
