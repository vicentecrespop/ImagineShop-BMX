import { createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const isBrowser = typeof window !== 'undefined'
    const SESSION_STORAGE = 'products'
    const ShippingValue = 50

    const addProduct = (product) => {
        console.log('Produto adicionado ao carrinho.')
        const products = getProducts()
        products.push(product)
        if(isBrowser) {
            sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products))
        }
    }

    const getProducts = () => {
        if(isBrowser) {
            const products = sessionStorage.getItem(SESSION_STORAGE)
            return products ? JSON.parse(products) : []
        }
    }

    const getTotalProducts = (products) => {
        const total = products.reduce((sum, cur) => sum + cur.price, 0)
        return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})).format(total)
    }

    const getTotalValue = (products) => {
        const total = products.reduce((sum, cur) => sum + cur.price, 0)
        return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})).format(total + ShippingValue)
    }

    const getShippingValue = () => {
        return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})).format(ShippingValue)
    }

    const clearAll = () => {
        if(isBrowser) {
            sessionStorage.clear()
        }
    }

    return (
        <CartContext.Provider value={{ addProduct, getProducts, getTotalProducts, getTotalValue, getShippingValue, clearAll }}>
            {children}
        </CartContext.Provider>
    )
    

}

export default CartProvider