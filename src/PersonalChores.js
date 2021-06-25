import React, {useState} from 'react'
import Names from './Names'

const PersonalChores = ({name, currChore, setCurrChore}) => { 
    
    const [temp, setTemp] = useState(name.currChore)

    const choreMinus = () => {
        if (temp == 0) {
            return 
        }
        else {
            setTemp(temp - 1)                           
        }
    }

    const chorePlus = () => {
        if (temp >= name.perChores.length - 1) {
            return;
        }
        else {                           
            setTemp(temp+1)                              
        }
    }

    const check = () => {
        if (name.perChores.length > 0) {
            return temp + 1
        }
        else {
            return temp
        }
    }

    return (
        <div>
            <div className="personal-chores-container">
                <button id="per-minus" onClick={choreMinus}> 
                    &#x2190; 
                </button>
                <p className="per">
                    {name.perChores[temp]}
                </p>        
                <button id="per-plus" onClick={chorePlus}> 
                    &#x2192; 
                </button>
            </div>
            <div className="count">
                {check()} / {name.perChores.length}
            </div>
        </div>
    )
}

export default PersonalChores
