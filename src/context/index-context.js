import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [navItem, setNavItem] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [number, setNumber] = useState(0)

    return (
        <CartContext.Provider value={{ navItem, setNavItem, totalPrice, setTotalPrice, number, setNumber }}>
            {children}
        </CartContext.Provider>
    )
}
