import React, {useState} from 'react'
import {BsTrash} from 'react-icons/bs'

const ChoreList = ({chores, setCurrPage, setChores}) => {

    const deleteChore = (id) => {

        const newList = chores.filter((chore) => chore.key != id)
        setChores(newList)
    }

    


    return (
        chores.map(chore => 
            <div key={chore.key} className="chore-content-container">
                <div className="chore-content">
                    <p id="chore-name">{chore.chore}</p>
                    <section id="chore-content-right">
                        <p id="chore-difficulty">Diff: {chore.difficulty}</p>
                        <BsTrash 
                            className="trashIcon" 
                            id="trashIcon-chores" 
                            onClick = {() => deleteChore(chore.key)}
                        />
                    </section>
                </div>
            </div>      
        )
    )}

export default ChoreList
