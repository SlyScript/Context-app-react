import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/index-context'
import data from '../data'

function Chart() {

    const { navItem, setNavItem, totalPrice, setTotalPrice, number } = useContext(CartContext)


    const navup = (price) => {
        setNavItem(navItem + 1)
        setTotalPrice(() => (totalPrice + price))
        return
    }

    const navdown = (price) => {
        if (navItem < 0) {
            setNavItem(0)
        }
        else if (navItem > 0) {
            setNavItem(navItem - 1)
            setTotalPrice(() => (totalPrice - price))
        }
        return
    }



    return (
        <div className='chart'>
            {data.map((item) => {
                return (
                    <div className='chartlist' key={item.id}>
                        <div className='chartitem'>
                            <img src={item.img} alt={item.title} />
                            <ul className='chartinfo' style={{ listStyle: 'none' }}>
                                <li><h2>{item.title}</h2></li>
                                <li><h3>${item.price}</h3></li>
                            </ul>
                        </div>
                        <ul className='chartcalc' style={{ listStyle: 'none' }}>
                            <div className='calc'>
                                <button onClick={() => navup(item.price)} style={{ backgroundColor: 'grey', color: 'white' }}>
                                    ADD
                                </button>
                                <button>{number}</button>
                                <button onClick={() => navdown(item.price)} style={{ backgroundColor: 'red', color: 'white' }}>
                                    REMOVE
                                </button>
                                <div></div>
                            </div>
                        </ul>
                    </div>
                )
            })}
            <div>
                <h2 className='price'>TOTAL PRICE: ${totalPrice}</h2>
            </div>
        </div>
    )
}

export default Chart