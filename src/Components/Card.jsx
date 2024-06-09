import React from 'react';
import '../Styles/ItemList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Card = ({ product }) => {
    const [itemsCount,setItemsCount]=useState(0);
    const [Item,setItem]=useState([]);

    const AddItem=(productName)=>{
        const newMyArray = [...Item, product]; // Add an item        
        setItem(newMyArray);
        console.log(Item)
        setItemsCount(itemsCount+1);
    }

    const DeleteItem=(productName)=>{                
        setItemsCount(itemsCount-1);
    }

  return (
    <>
        <div className="card p-1 pointer">
            <div className="card-content">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-description">{product.description}</p>
                <p className="card-price">${product.price}</p>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-primary" onClick={() => AddItem(product.name)}>Add</button>
                <button type="button" className="btn btn-danger" onClick={() => DeleteItem(product.name)}>Delete</button>
            </div>
            <br></br>
            <div>
                <h6>Total Buy Item from store is : {itemsCount}</h6>
            </div>
        </div>
    </>
  );
};

export default Card;



