import React from "react";

function CardBody({nama, kelas, alamat}) {
    return (
        <div className="card-body">
            <p>Nama : {nama}</p>
            <p>Kelas : {kelas}</p>
            <p>Alamat : {alamat}</p>
        </div>
    )
}

export default CardBody