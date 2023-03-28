import ProductsDisplay from "@/components/ProductsDisplay"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Search() {
    const router = useRouter()
    const { search } = router.query
    const [products, setProducts] = useState([])

    const getSearchProducts = async () => {
        console.log(search)
        const res = await fetch(`../api/product/${search}`)
        const data = await res.json()
        if(data?.products) {
            setProducts(data.products)
        }
    }

    const Display = () => (
        <ProductsDisplay productsArray={products} />
    )

    const ProductNotFound = () => (
        <div className="hero m-5 ps-5">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
            </span>
            <span className="ms-3">Nenhum resultado encontrado para {search}...</span>
        </div>
    )

    useEffect(() => {
        getSearchProducts()
    }, [search])

    return (
        <div className="hero">
            <div className="search-title d-flex justify-content-center mt-5 fs-5">
                <span>Busca por: </span>
                <span className="fw-bold ms-2 text-uppercase">{search}</span>
            </div>
            {/* {products.length === 0 && <div>Nenhum Resultado encontrado para {search}...</div>} */}
            {/* {products.length !== 0 && <Display />} */}
            {products.length !== 0 ? (
                <Display />
            ) : (
                <ProductNotFound />
            )}
        </div>
    )
}