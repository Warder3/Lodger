import React, {useState} from 'react'

const Chores = ({chores, setChores, totalDifficulty, setTotalDifficulty, names, setNames, setCurrChore}) => {

    const [chore, setChore] = useState('');
    const [difficulty, setDifficulty] = useState(1);


    // seperateChores function randomly assigns an name with a chore

    const seperateChores = (names, chores) => {
        let index = Math.floor(Math.random() * names.length)

        let nameScapeGoat = [...names]

        let placeHolder = [chore, ...nameScapeGoat[index].perChores]
        nameScapeGoat[index].perChores = placeHolder
        nameScapeGoat[index].perDifficulty += difficulty
        nameScapeGoat[index].currChore = 0

        setNames(nameScapeGoat) 
} 

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const submit = () => {
        if (chore == '') {
            alert('Please, add a chore')
            return;
        }
        if (chore.length > 30) {
            alert('Please, shorten your description of the chore')
            return;
        }
        else {
            setChores([{chore: chore, difficulty: difficulty, key: chore}, ...chores])
            setTotalDifficulty(totalDifficulty+difficulty)   
            seperateChores(names, chores);     
            setChore('')
            setDifficulty(1)            
        }
    }

    const minus = () => {
        if (difficulty < 2) {
            alert('Please choose a difficulty level from 1-10')
            return;
        }
        else {
            setDifficulty(difficulty - 1)
        }
    }
    const plus = () => {
        if (difficulty > 9) {
            alert('Please choose a difficulty level from 1-10')
            return;
        }
        else {
            setDifficulty(difficulty + 1)
        }
    }

    return (
        <div className="chores-header"> 
            <p id="chore-title">Chores & Difficulty:</p>
            <div className="input-container">
                <form id="chore-form" onSubmit={handleSubmit}>
                    <input 
                        className="chore-input-text"
                        type="text"
                        placeholder="Jon Doe"
                        autoComplete="off"
                        onChange = {(e) => setChore(e.target.value)}
                        value = {chore}
                    />
                    <div className="difficulty-container">
                        <button className="difficulty-minus" onClick = {minus}>
                            -
                        </button>
                        <p id="difficulty-level">
                            {difficulty}
                        </p>
                        <button className="difficulty-plus" onClick = {plus}> 
                            +
                        </button>
                    </div>
                    <input 
                        value="+" 
                        className="chore-input-button"
                        type="submit"
                        onClick = {submit}
                    />
                </form>
            </div>
        </div>
    )
}

export default Chores
