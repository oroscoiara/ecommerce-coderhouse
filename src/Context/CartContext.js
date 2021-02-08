/*import React, { createContext, useState, useContext} from "react"

export const CartContext = createContext(null)
export const AppCartContext= () => useContext(CartContext)
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [stock, setStock] = useState() 
    const [addItems, setAddItems] = useState(0)

    const addProduct = (item, addItems) => {
        const purchase = {
               item: {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    stock: item.stock,
                    perfilter: item.perfilter,
                    imgUrl: item.imgUrl
                },
                quantity: addItems 
            }
            mergeDuplicate(purchase, purchase.item.itemId, addItems)
            cartCounter()
        console.log("Item completo", item)
        console.log("Item reducido", purchase)
    }

    const searchIdInCart = (itemId) => {
        return cart.find(ticket => ticket.item.itemId === itemId)    
    }

    const addMoreToCart = (itemId, addItems) => {  
        searchIdInCart(itemId).quantity += addItems
    }

    const mergeDuplicate = (purchase, itemId, addItems) => { 
        !cart.length ? setCart(cart => [...cart, purchase]) 
        : searchIdInCart(itemId) ? addMoreToCart(itemId, addItems) : setCart(cart => [...cart, purchase])
    }

    const changeQuantity = (itemId, counter) => {  
        searchIdInCart(itemId).quantity = counter
        setCart([...cart])
        console.log("Cart", cart)
    }

    const removeFromCart = (itemId) => { 
        const filtered = cart.filter(purchase => 
            purchase.item.itemId !== itemId
        )
        searchIdInCart(itemId).counter +=  searchIdInCart(itemId).quantity
        setCart(filtered)
    }

    const cartCounter = () => { 
        let totalItems = []
        let sum = 0;
        cart.map(purchase => {
            return totalItems.push(purchase.quantity)
        })
        console.log("cantidad:", totalItems)
        totalItems.length < 2 ? sum = totalItems[0]
        :
        totalItems.reduce((accumulator, currentValue) => {
            return sum = accumulator + currentValue
        })
        return sum
    }

    const total = () => {
        let subtotal = []
        let sum = 0
        cart.map(purchase => {
            return subtotal.push(purchase.item.price * purchase.quantity)
        })
        subtotal.length < 2 ? sum = (subtotal[0])
        : subtotal.reduce((accumulator, currentValue) => {
            return sum = (accumulator + currentValue)
        })
        console.log(sum)
        return sum
    }

    const clearCart = () => {
        setCart([])
    }

    console.log("Cart", cart)


    return (
        <CartContext.Provider value={{cart, setCart, stock, setStock, addItems, setAddItems, searchIdInCart,
          addMoreToCart, changeQuantity, removeFromCart, addProduct, mergeDuplicate, clearCart, total, cartCounter}}>
            {children}
        </CartContext.Provider>
    )
}

*/