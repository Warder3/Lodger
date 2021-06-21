import React, {useState} from 'react'
import PersonalChores from './PersonalChores'

const Objects = ({names, chores, scapeGoat, setScapeGoat, currChore, setCurrChore}) => {

    return (       
        <div className='object-content-container'>
             {names.map(name => (
                <div className='object-content'>
                    <div key={name.key} className='object-title'>
                        <p className="object-name">{name.name}</p>
                        <p className="object-difficulty">{name.perDifficulty}</p>
                    </div>                    
                    <PersonalChores 
                        name={name} 
                        names={names} 
                        scapeGoat={scapeGoat} 
                        setScapeGoat={setScapeGoat} 
                        currChore={currChore} 
                        setCurrChore={setCurrChore} />
                </div>                
             ))}
        </div> 
    )
}

export default Objects
