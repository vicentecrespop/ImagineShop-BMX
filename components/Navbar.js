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

    return (
        <>
            <nav className="navbar-container container-fluid shadow-lg position-fixed top-0 bg-white px-4 pt-4 pb-2">
                <div className="row">
                    <div className="col-3 d-flex justify-content-end">
                        <Link href="/">
                            <Image src="/logo.png" width={200} height={75} alt="Logo ImagineShop"/>
                        </Link>
                    </div>
                    <div className="col-9">
                        <div className="row d-flex align-items-center justify-content-end">
                            <div className="col-12 d-flex justify-content-end">    
                                {/* <Link href="conta" className="ms-4 d-flex align-items-center text-decoration-none text-black">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                </svg>
                                    </span>
                                    <span className="mx-2 text-uppercase fw-bold">Minha conta</span>
                                </Link> */}
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
                        <div className="row d-flex justify-content-end pt-3">
                            <div className="col-10 d-flex justify-content-end">
                                <Link href="bikes" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Bikes</Link>
                                <span className="fs-5">/</span>
                                <Link href="pecas" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Peças</Link>
                                <span className="fs-5">/</span>
                                <Link href="quadros" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Quadros</Link>
                                <span className="fs-5">/</span>
                                <Link href="marcas" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Marcas</Link>
                                <span className="fs-5">/</span>
                                <Link href="roupas" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Roupas</Link>
                                <span className="fs-5">/</span>
                                <Link href="protecao" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Proteção</Link>
                                <span className="fs-5">/</span>
                                <Link href="acessorios" className="bg-white border-0 mx-2 fw-bold text-uppercase fs-5 text-decoration-none text-dark">Acessórios</Link>
                            </div>
                            <form onSubmit={e => searchProduct(e)} className="col-2 position-relative d-flex align-items-center justify-content-end">
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