import React, {useState} from 'react'

const List = ({names, setNames}) => {

    const [key, setKey] = useState(0);

    return (
        names.map(name => {
            <p> {name} {key}</p>
            setKey(key+1);
        })
    )
}

export default List
