import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/index-context'

function Navbar() {
    const { navItem } = useContext(CartContext)
    return (
        <div className='nav'>
            <h2>Store</h2>
            <h3>Items In Cart({navItem})</h3>
        </div>
    )
}

export default Navbar