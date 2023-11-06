import React from 'react'

function Header() {
    return (
        <div className='grid-section'>
            <div className='header-left'>
                <img className='react-logo' src='src/assets/react.svg'></img>
            </div>

            <div>
                <h1 className='react-title'>React.js</h1>
                <h2 className='react-title-2'>i.e., using the React library for rendering the UI </h2>
            </div>
        </div>
    )
}

export default Header