import React from "react";
import product from '../Data/data';
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemList(){
    return(
        <>
           <div>
                {product.map(product => (
                        <Card key={product.name} product={product} />
                    ))}
           </div>
        </>
    )
}

export default ItemList