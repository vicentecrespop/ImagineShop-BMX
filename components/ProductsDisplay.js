import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductsDisplay({ category = '', productsArray = [] }) {

    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        const res = await fetch('../api/product')
        const selectedProducts = await res.json()
        setProducts(selectedProducts.products)
    }

    useEffect(() => {
        if(productsArray.length === 0) {
            getAllProducts()
        } else {
            setProducts(productsArray)
        }
    }, [])

    return (
        <div className="hero container-fluid my-5 px-4">
            <div className="products-display-container row">
                {products.length === 0 && (
                    <>
                        <div className="d-flex justify-content-center m-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Carregando...</span>
                            </div>
                        </div>
                    </>
                )}
                {products.length !== 0 && products.map((product, index) => {
                    if(product.category !== category && category !== '') return 
                    return (
                        <div key={index} className="col d-flex justify-content-center">
                            <Product product={product} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}