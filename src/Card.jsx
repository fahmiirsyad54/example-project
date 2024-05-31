import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import DeleteButton from "./deleteButton";

function Card({nama, kelas,alamat, foto, onDelete, id}) {
    return (
        <div className='card'>
            <hr />
            <CardImage foto={foto} />
            <CardBody nama={nama} 
                kelas={kelas} 
                alamat={alamat} />
            <DeleteButton 
                onDelete={onDelete} 
                id={id} 
            />
            
        </div>
    )
}

export default Card