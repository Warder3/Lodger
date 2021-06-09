import React, {useState} from 'react'
import {BsTrash} from 'react-icons/bs'

const ChoreList = ({chores, setCurrPage, setChores, totalDifficulty, setTotalDifficulty}) => {

    const deleteChore = (c) => {
        const newList = chores.filter((chore) => chore.key != c.key)
        setChores(newList)

        setTotalDifficulty(totalDifficulty - c.difficulty)
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
                            onClick = {() => deleteChore(chore)}
                        />
                    </section>
                </div>
            </div>      
        )
    )}

export default ChoreList
