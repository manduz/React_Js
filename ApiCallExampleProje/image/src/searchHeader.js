import {useState} from "react";


function SearchHeader({search}) {
    const [valueInput, setValue] = useState('');
    const handleFormSubmit =(event) =>{
        event.preventDefault();
        debugger;
        search(valueInput);
    };
    const handleChange =(event)=>{
        setValue(event.target.value);
        debugger;
    }
    return (
        <div className="searchDiv">
            
            <form onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsunuz?</label>
                <input value={valueInput} onChange={handleChange}/>
            
            </form>
        </div>
    );
    
}
debugger;

export default SearchHeader;