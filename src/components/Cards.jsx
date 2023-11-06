import React, {useState} from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

function Cards() {
    const [show, setShow] = useState(null);
    
    
    function handleButton1(){
        setShow(1);
    }

    function handleButton2(){
        setShow(2)
    }

    function handleButton3(){
        setShow(3)
    }

    return (
    <div className='cards'>
        <div className='buttons'>
            <button onClick={handleButton1}>Why React?</button>
            <button onClick={handleButton2}>Core Features</button>
            <button onClick={handleButton3}>Related Resources</button>
        </div>

        <div className='body-content'>
        {show === 1 && <Content1 />}
        {show === 2 && <Content2 />}
        {show === 3 && <Content3 />}
        </div>
    </div>
    )
}

export default Cards