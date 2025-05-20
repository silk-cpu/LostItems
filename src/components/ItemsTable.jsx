import {useState, useEffect} from "react"
import axios from "axios"

function Table(props){

    const [items,setItems]=useState([])

    useEffect(()=>{
        setItems(props.data)    
    },[props.data])
    
    return(<>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">lost_date</th>
                    <th scope="col">location</th>
                    <th scope="col">found</th>
                    <th scope="col">found_date</th>
                    <th scope="col">found_location</th>
                    <th scope="col">note</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item,index)=>{
                        return(
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.lost_date}</td>
                                <td>{item.location}</td>
                                <td>{(item.found).toString()}</td>
                                <td>{item.found_date}</td>
                                <td>{item.found_location}</td>
                                <td>{item.note}</td>
                                <td>{!item.found && <button className="btn btn-outline-success" onClick={(e) => {props.updateItem(e, item);}}>Item Found</button> }</td>
                                <td><button className="btn btn-outline-warning" onClick={(e) => {props.callEditItem(e, item);}}>Edit</button></td>
                                <td><button  onClick={() => props.deleteEntry(item.id)} className="btn btn-outline-danger">Delete</button></td>
                            </tr>
                        )
                    })

                }
               
            </tbody>
        </table>
    </>)
}

export default Table;