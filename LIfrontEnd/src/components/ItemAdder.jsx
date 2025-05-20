import {useEffect,useState} from "react"

function ItemAdder(props){

    const [newItems, setNewItems] = useState({
        name: "",
        description: "",
        lost_date: "",
        location: "",
        found: "",
        found_date: "",
        found_location: "",
        note: ""
    });

    const changeName = (event) =>{
        setNewItems({
            ...newItems,
            name:event.target.value,
        })
    }
    const changeLostDate = (event) =>{
        setNewItems({
            ...newItems,
            lost_date:event.target.value,
        })
    }
    const changeLocation = (event) =>{
        setNewItems({
            ...newItems,
            location:event.target.value,
        })
    }
    const changeDescription = (event) =>{
        setNewItems({
            ...newItems,
            description:event.target.value,
        })
    }
    const changeFound = (event) =>{
        setNewItems({
            ...newItems,
            found:event.target.checked,
        })
    }
    const changeFoundDate = (event) =>{
        setNewItems({
            ...newItems,
            found_date:event.target.value,
        })
    }
    const changeFoundLocation = (event) =>{
        setNewItems({
            ...newItems,
            found_location:event.target.value,
        })
    }

    const changeNote = (event) =>{
        setNewItems({
            ...newItems,
            note:event.target.value,
        })
    }

    const sendData= (e) =>{
        props.addItem(e,newItems)
        setNewItems({
                    name: "",
                    description: "",
                    lost_date: "",
                    location: "",
                    found: false,
                    found_date: "",
                    found_location: "",
                    note: ""
                })
    }
    
    return (
    <>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputName" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="name" value={newItems.name} onChange={changeName} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputDescription" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="description" value={newItems.description} onChange={changeDescription} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputLostDate" className="form-label"></label>
                                <input type="date" className="form-control" placeholder="lost date" value={newItems.lost_date} onChange={changeLostDate} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputLocation" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="location" value={newItems.location} onChange={changeLocation} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputFound" className="form-label">found: </label>
                                <input type="checkbox" className="form-check-input" placeholder="found" checked={newItems.found} onChange={changeFound} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputFoundDate" className="form-label"></label>
                                <input type="date" className="form-control" placeholder="found date" value={newItems.found_date} onChange={changeFoundDate} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputFoundLocation" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="found location" value={newItems.found_location} onChange={changeFoundLocation} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputNote" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="note" value={newItems.note} onChange={changeNote}/>
                            </div>
                        </th>
                        <th><button onClick={(e) => {sendData(e);}} className="btn btn-primary">Aggiungi</button></th>
                    </tr>
                </thead>
            </table>
        
        </>)
}

export default ItemAdder