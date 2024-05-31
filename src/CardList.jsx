import React from "react";
import Card from "./Card";

function CardList({dataSiswa, onDelete}){
    return (
        <div className='card-list'>
            {dataSiswa.map((siswa) => (
                <Card 
                    {...siswa} 
                    key={siswa.id}
                    onDelete={onDelete}
                    id={siswa.id}
                />
            ))}
        </div>
    )
}

export default CardList