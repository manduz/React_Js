
import './App.css';
import SearchHeader from './searchHeader';
import searchImages  from './api';
import { useState } from 'react';
import {ImageList} from "./component/ImageItem";
function App() {
  
  const [images, setimages] = useState([]);
  const handleSubmit = async(term)=>
  {
    const result = await searchImages(term);
    setimages(result);
  };
  return (
    <div className="App">
      <SearchHeader search ={handleSubmit}/>
      <ImageList imagesPlaceholder = {images}/>
    </div>
  );
}
export default App;
