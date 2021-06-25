import React, {useState, useEffect} from 'react'
import Names from './Names'
import NameList from './NameList'
import Chores from './Chores'
import ChoreList from './ChoreList'
import PaginationBar from './PaginationBar'
import Objects from './Objects'

const Hero = () => {

    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const [chores, setChores] = useState([]);

    const [currPage, setCurrPage] = useState(1);
    const [choresPerPage, setChoresPerPage] = useState(13);
    const lastChoreIndex = currPage * choresPerPage;
    const firstChoreIndex = lastChoreIndex - choresPerPage;
    const currChores = chores.slice(firstChoreIndex, lastChoreIndex)

    const [totalDifficulty, setTotalDifficulty] = useState(0);

    const [perChores, setPerChores] = useState([]);
    const [perDifficulty, setPerDifficulty] = useState(0);
    
    const [currChore, setCurrChore] = useState(0);  
    const [scapeGoat, setScapeGoat] = useState('')    

    return (

        <div className="hero-container">
            <div className="names-container">
                <Names 
                    names={names} 
                    setNames={setNames} 
                    perChores={perChores}
                    perDifficulty={perDifficulty}                      
                    name={name}
                    setName={setName}     
                    currChore={currChore}    
                    />

                <NameList 
                    names={names} 
                    setNames={setNames} 
                    chores={chores}
                    setChores={setChores}/>                    

            </div>
            <div className="chores-container">
                <Chores 
                    chores={chores} 
                    setChores={setChores} 
                    totalDifficulty={totalDifficulty} 
                    setTotalDifficulty={setTotalDifficulty} 
                    names={names}
                    setNames={setNames}    
                    scapeGoat={scapeGoat}
                    setScapeGoat={setScapeGoat}  
                    currChore={currChore}
                    setCurrChore={setCurrChore}                                           
                />

                <ChoreList         
                    chores={currChores} 
                    setCurrPage={setCurrPage} 
                    setChores={setChores} 
                    totalDifficulty={totalDifficulty} 
                    setTotalDifficulty={setTotalDifficulty}
                    names={names}
                    perDifficulty={perDifficulty}/>


                <PaginationBar 
                    chores={chores} 
                    currPage={currPage} 
                    setCurrPage={setCurrPage} 
                    choresPerPage={choresPerPage}/>

            </div>  
            <div className="objects-container">
                <Objects  
                    names={names} 
                    chores={chores}
                    totalDifficulty={totalDifficulty}     
                    scapeGoat={scapeGoat}
                    setScapeGoat={setScapeGoat}  
                    currChore={currChore} 
                    setCurrChore={setCurrChore}                     
                    />
            </div>          
        </div>
    )
}

export default Hero
