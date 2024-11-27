
function SearchHeader({search}) {
    const handleFormSubmit =(event) =>{
        event.preventDefault();
        debugger;
        search('emek');
    };
    return (
        <div className="searchDiv">
            
            <form onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsunuz?</label>
                <input/>
            </form>
        </div>
    );
    
}
debugger;

export default SearchHeader;