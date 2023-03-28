import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Product({ product }) {

    const { addProduct } = useContext(CartContext)

    const addToCart = (product) => {
        toast.success("Produto adicionado ao carrinho.", {
            position: 'bottom-right',
            autoClose: 1000
        })
        addProduct(product)
    }

    return (
        <>
            <div onClick={() => addToCart(product)} className="product-container d-flex flex-column align-items-center justify-content-between border m-3">
                <div className="image-container position-relative d-flex pointer">
                    <Image src={`/img/${product.imgName}`} width={275} height={250} alt={product.name}/>
                    <span className="position-absolute w-100 h-100 d-none align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
                    </span>
                </div>
                <div className="d-flex flex-column align-items-start p-4 pt-0 fs-5 user-select-none">
                    <span className="fw-bold text-uppercase">{product.name}</span>
                    <span><span className={product.inStock === 0 ? 'text-decoration-line-through' : ''}>R${product.price}</span> {product.inStock === 0 && 'ESGOTADO'}</span>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}