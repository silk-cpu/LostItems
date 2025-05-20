import { useEffect, useState } from "react"
import axios from "axios"

function ItemEdit(props) {
    const [items, setItems] = useState({})
    
    // Use useEffect to set items when props.data changes
    useEffect(() => {
        if (props.data) {
            setItems(props.data)
        }
    }, [props.data]) // Only re-run if props.data changes
    
    console.log(items)

    const changeName = (event) => {
        setItems({
            ...items,
            name: event.target.value,
        })
    }
    
    const changeLostDate = (event) => {
        setItems({
            ...items,
            lost_date: event.target.value,
        })
    }
    
    const changeLocation = (event) => {
        setItems({
            ...items,
            location: event.target.value,
        })
    }
    
    const changeDescription = (event) => {
        setItems({
            ...items,
            description: event.target.value,
        })
    }
    
    const changeFound = (event) => {
        setItems({
            ...items,
            found: event.target.checked,
        })
    }
    
    const changeFoundDate = (event) => {
        setItems({
            ...items,
            found_date: event.target.value,
        })
    }
    
    const changeFoundLocation = (event) => {
        setItems({
            ...items,
            found_location: event.target.value,
        })
    }

    const changeNote = (event) => {
        setItems({
            ...items,
            note: event.target.value,
        })
    }
    
    const updateItem = (event) => {
        event.preventDefault();
        const url = "http://localhost:9005/lost_items/" + items.id;

        axios.put(url, { ...items })
            .then(response => {
                console.log("Item updated successfully:", response.data);
                // You might want to call a function from props to notify parent component
                if (props.onUpdate) {
                    props.onUpdate(response.data);
                }
                props.onUpdateItem(event,items)
            })
            .catch(error => {
                console.error("Error updating item:", error);
            });
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputName" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="name" value={items.name || ''} onChange={changeName} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputDescription" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="description" value={items.description || ''} onChange={changeDescription} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputLostDate" className="form-label"></label>
                                <input type="date" className="form-control" placeholder="lost date" value={items.lost_date || ''} onChange={changeLostDate} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputLocation" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="location" value={items.location || ''} onChange={changeLocation} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputFound" className="form-label">found: </label>
                                <input type="checkbox" className="form-check-input" placeholder="found" checked={items.found || false} onChange={changeFound} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputFoundDate" className="form-label"></label>
                                <input type="date" className="form-control" placeholder="found date" value={items.found_date || ''} onChange={changeFoundDate} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputFoundLocation" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="found location" value={items.found_location || ''} onChange={changeFoundLocation} required/>
                            </div>
                        </th>
                        <th scope="col">
                            <div>
                                <label htmlFor="InputNote" className="form-label"></label>
                                <input type="text" className="form-control" placeholder="note" value={items.note || ''} onChange={changeNote}/>
                            </div>
                        </th>
                        <th>
                            <button onClick={updateItem} className="btn btn-primary">Update Item</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default ItemEdit