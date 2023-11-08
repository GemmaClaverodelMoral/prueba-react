import React, {useState} from 'react';

function Component2() {
    const [text, setText] = useState();
    const [updated, setUpdate] = useState();

    const textOnChange = (event) => {
        setText(event.target.value)
    };

    const buttonOnClick = () => {
        setUpdate(text)
    };

    return (
        <div>
            <input type="text" value={text} onChange={textOnChange}></input>
            <button onClick={buttonOnClick}>Actualizar</button>
            <p>Texto input: {text}</p>
            <p>Texto actualizado: {updated}</p>
        </div>
    )
}

export default Component2;
