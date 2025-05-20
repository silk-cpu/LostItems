import { useEffect, useState } from "react"
import axios from "axios"

import ItemsTable from '../components/ItemsTable'
import ItemAdder from "../components/ItemAdder"

function Items(props){
    const [items,setItems]=useState([])
    const [isVisible,setIsVisible]=useState([])

    /*GET -------------------------------------------------------------------------------------------------------------------*/
    const loadItems = () =>{
        const url ="http://localhost:9005/lost_items"
        axios.get(url)
            .then(response =>{
                setItems(response.data)
            })
        
    }

    /*POST -------------------------------------------------------------------------------------------------------------------*/
    const addItem = (event ,newItems) =>{
        event.preventDefault()
        const url = "http://localhost:9005/lost_items"
        axios.post(url,newItems)
            .then((response)=>{
                setItems([...items,response.data])
            })
    }

    /*PUT -------------------------------------------------------------------------------------------------------------------*/
    const updateItem = (event,item) =>{
        console.log("called updateItem")
        event.preventDefault();
        const url = "http://localhost:9005/lost_items/" + item.id;

        axios.put(url, { ...item, found: true })
            .then((response) => {
                console.log(response.data)
                const updatedItem = response.data;
                const updatedItems = items.map((i) => 
                    i.id === updatedItem.id ? updatedItem : i
                );
                setItems(updatedItems);
            })
        .catch((error) => {
            console.error("Error updating item:", error);
        });
    }

    /*DELETE -------------------------------------------------------------------------------------------------------------------*/
    const deleteEntry = (id) => {
        axios.delete(`http://localhost:9005/lost_items/${id}`)
            .then((response) => {
                const newItem = items.filter((item) => item.id !== id);
                setItems(newItem);
        }).catch(error => {
            console.log(error)
        });
      }

    useEffect(()=>{
           loadItems();     
    },[])

    const callEditItem= (e, item) =>{
        props.onUpdateItem(e, item)
    }

    return(<>
        
        
        <ItemAdder
            addItem={addItem}
        />
        <ItemsTable 
            data={items}
            updateItem={updateItem}
            deleteEntry={deleteEntry}
            callEditItem={callEditItem}
        />
    
    </>)
}

export default Items