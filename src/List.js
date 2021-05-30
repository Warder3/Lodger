import React, {useState} from 'react'
import {BsTrash} from 'react-icons/bs'

const List = ({names}) => {


    return (
        <div className="listContainer">
        {
        names.map(name => (
            <div key={name.toString()} className="nameContent">
                {name}
                <BsTrash className="trashIcon"/>
            </div>
        ))}

        </div>
    )
}

export default List
