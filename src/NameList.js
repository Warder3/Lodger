import React, {useState} from 'react'
import {BsTrash} from 'react-icons/bs'

const NameList = ({names, setNames, chores, setChores}) => {

    // This function deletes names and deletes the person's chores from the entire chore list
    const deleteName = (id) => {        
        const newList = names.filter((name) => name.key != id.key)
        setNames(newList)    

        const newChores = chores.filter((chore) => !(id.perChores.includes(chore.key)))        
        setChores(newChores)
    }

    return (
        <div className="listContainer">
        {
        names.map(item => (
            <div key={item.name} className="listContent">
                <div className="roomie"> {item.name} </div>
                <BsTrash className="trashIcon" onClick={() => deleteName(item)}/>
            </div>
        ))}

        </div>
    )
}

export default NameList
