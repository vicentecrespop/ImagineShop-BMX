import ProductsDisplay from "@/components/ProductsDisplay"
import { useEffect, useState } from "react"

export default function Marcas() {

    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedProducts, setSelectedProducts] = useState([])

    const getAllProducts = async () => {
        const res = await fetch('../api/product')
        const selectedProducts = await res.json()
        setProducts(selectedProducts.products)
    }

    const getSelectedProducts = () => {
        const selectedProducts = products.filter(product => product.brand === selectedBrand)
        setSelectedProducts(selectedProducts)
    }

    const getBrands = async () => {
        const res = await fetch('../api/product/brands')
        const brands = await res.json()
        setBrands(brands.brands)
        setSelectedBrand(brands.brands[0])
    }

    const Display = () => (
        <ProductsDisplay productsArray={selectedProducts} />
    )

    useEffect(() => {
        getAllProducts()
        getBrands()
    }, [])

    useEffect(() => {
        getSelectedProducts()
    }, [selectedBrand, brands])

    return (
        <>
            <div className="hero">
                <div className="brands-names d-flex flex-row px-4 mx-5 pt-5 justify-content-evenly">
                    {brands.length !== 0 && brands.map((brand, index) => (
                        <div key={index} onClick={() => setSelectedBrand(brand)} className={`brands-button pointer ${selectedBrand === brand ? "selected-brands-button" : ""}`}>
                            {brand}
                        </div>
                    ))}
                </div>
                {selectedProducts.length !== 0 && <Display />}
            </div>
        </>
    )
}