import React, {useState} from 'react'

const Chores = ({chores, setChores}) => {

    const [chore, setChore] = useState('');
    const [difficulty, setDifficulty] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setChore('');
        console.log(chores)
    }

    const submit = () => {
        if (chore == '') {
            alert('Please, add a chore')
            return;
        }
        else {
            setChores([...chores, {chore: chore, difficulty: difficulty, key: chore}])
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