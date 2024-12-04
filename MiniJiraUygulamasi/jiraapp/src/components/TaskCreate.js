import {useState} from 'react';
function TaskCreate({onCreate, task, taskFormUpdate,}) {
    const [title, setTitle] = useState('');

    //textarea için
    const [textArea, setTextarea] = useState('');

    const handleChange = (event) =>{
        //title değerini güncellemiş oluyorum
        setTitle(event.target.value);
    };

    //textarea için
    const handleTextChange =(event)=>{
        setTextarea(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault(); //sayfanın yenilenmesini engeller
        onCreate(title,textArea);
        setTitle('');//işlem bittikten sonra içi siler
        setTextarea('');
    };

    return ( 
        <div className="task-create" >
            <h3>Lütfen Task Ekleyiniz!</h3>
            <form className ="task-form">
                <label className="task-label">Başlık</label>
                <input value= {title} onChange={handleChange} className="task-input"/>
                <label className="task-label">Task Giriniz!</label>
                <textarea value= {textArea} onChange={handleTextChange}  className="task-input" rows ={5}/>
                <button className="task-button"  onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>
     );
}

export default TaskCreate;