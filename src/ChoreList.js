import React, {useState} from 'react'
import {BsTrash} from 'react-icons/bs'
import Names from './Names'

const ChoreList = ({chores, setCurrPage, setChores, totalDifficulty, setTotalDifficulty, names, perDifficulty}) => {

    const deleteChore = (c) => {
        const newList = chores.filter((chore) => chore.key != c.key)
        setChores(newList)

        setTotalDifficulty(totalDifficulty - c.difficulty)

        // GETS THE NAME THAT THE CHORE BELONGS TO 
        // SUBTRACTS FROM PERDIFFICULTY AND REMOVES IT FROM THE CHORE LIST

        let current = names.filter((name) => name.perChores.includes(c.key))
        current[0].perDifficulty -= c.difficulty

        let newPerChores = current[0].perChores.filter((chore) => chore != c.chore)

        current[0].perChores = newPerChores

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
