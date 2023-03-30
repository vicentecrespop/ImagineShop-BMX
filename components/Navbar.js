import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Navbar() {

    const router = useRouter()
    const [totalProducts, setTotalProducts] = useState(0)
    const { getProducts } = useContext(CartContext)

    useEffect(() => {
        const products = getProducts()
        setTotalProducts(products.length)
    })

    const searchProduct = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        document.getElementById('search-input').value = ''
        router.push(`/search/${search}`)
    }

    const toggleNavbar = () => {
        const navbar = document.querySelector('div.navbar-items-container')
        navbar.classList.toggle('navbar-items-container--active')
    }

    return (
        <>
            <nav className="navbar-container container-fluid shadow-lg position-fixed top-0 bg-white px-4 pt-4 pb-2">
                <div className="row navbar-row">
                    <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
                        <span className="navbar-button" onClick={() => toggleNavbar()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </span>
                        <Link href="/">
                            <Image src="/logo.png" width={200} height={75} alt="Logo ImagineShop"/>
                        </Link>
                    </div>
                    <div className="col-8 navbar-right">
                        <div className="row d-flex align-items-center justify-content-end">
                            <div className="cart-container col-12 d-flex">    
                                <Link href="carrinho" className="ms-4 d-flex align-items-center text-decoration-none text-black">
                                    <div className="position-relative">
                                        {totalProducts > 0 && (
                                            <div className="position-absolute w-100 top-0 translate-middle-y bg-danger text-white rounded-circle text-center">
                                                <span>{totalProducts}</span>
                                            </div>
                                        )}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
                                            <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                                        </svg>
                                    </div>
                                    <span className="mx-2 text-uppercase fw-bold">Minha sacola</span>                    
                                </Link>
                            </div>
                        </div>
                        <div className="cart-container row d-flex pt-3">
                            <div className="navbar-items-container col-10 justify-content-end bg-white">
                                <div className="navbar-close position-relative justify-content-center my-5 mx-2">
                                    <span>Menu</span>
                                    <span className="position-absolute top-0 end-0" onClick={() => toggleNavbar()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    </span>
                                </div>
                                <Link href="bikes" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Bikes</Link>
                                <span className="navbar-items-separator fs-5">/</span>
                                <Link href="pecas" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Peças</Link>
                                <span className="navbar-items-separator fs-5">/</span>
                                <Link href="quadros" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Quadros</Link>
                                <span className="navbar-items-separator fs-5">/</span>
                                <Link href="marcas" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Marcas</Link>
                                <span className="navbar-items-separator fs-5">/</span>
                                <Link href="roupas" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Roupas</Link>
                                <span className="navbar-items-separator fs-5">/</span>
                                <Link href="protecao" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Proteção</Link>
                                <span className="navbar-items-separator fs-5">/</span>
                                <Link href="acessorios" className="navbar-item bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Acessórios</Link>
                            </div>
                            <form onSubmit={e => searchProduct(e)} className="search-container col-2 position-relative d-flex align-items-center">
                                <button className="position-absolute start-0 ms-3 border-0 bg-white" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
                                </button>
                                <input type="text" name="search" id="search-input" placeholder="Buscar por..." className="py-1 ps-5 w-100" />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}