import React, {useState} from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

function Cards() {
    const [show, setShow] = useState(null);
    const [buttonStyles, setButtonStyles] = useState(['button', 'button', 'button'])
    
    function handleButton(index){
        setShow(index);
        const updatedStyles = buttonStyles.map((i) => (i === index ? 'button-clicked' : 'button'));
        updatedStyles[index] = 'button-clicked';
        setButtonStyles(updatedStyles);
    }

    return (
    <div className='cards'>
        <div className='buttons'>
            <button className={buttonStyles[0]} onClick={() => handleButton(0)}>Why React?</button>
            <button className={buttonStyles[1]} onClick={() => handleButton(1)}>Core Features</button>
            <button className={buttonStyles[2]} onClick={() => handleButton(2)}>Related Resources</button>
        </div>

        <div className='body-content'>
        {show === 0 && <Content1 />}
        {show === 1 && <Content2 />}
        {show === 2 && <Content3 />}
        </div>
    </div>
    )
}

export default Cards