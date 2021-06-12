import React, {useState} from 'react'
import {BsTrash} from 'react-icons/bs'

const NameList = ({names, setNames}) => {

    const deleteName = (id) => {

        const newList = names.filter((name) => name.key != id)
        setNames(newList)

    }

    return (
        <div className="listContainer">
        {
        names.map(item => (
            <div key={item.name} className="listContent">
                <div className="roomie"> {item.name} </div>
                <BsTrash className="trashIcon" onClick={() => deleteName(item.key)}/>
            </div>
        ))}

        </div>
    )
}

export default NameList
