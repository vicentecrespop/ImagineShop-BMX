import Image from "next/image"
import Link from "next/link"

import fundoBikes from '@/public/img/fundo-bikes.png'
import fundoPecas from '@/public/img/fundo-pecas.png'
import fundoQuadros from '@/public/img/fundo-quadros.png'
import fundoRoupas from '@/public/img/fundo-roupas.png'

export default function CategoryHero() {
    return (
            <div className="p-5 text-center">
                <h2 className="fw-bold">TOP CATEGORIAS</h2>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <Image className="w-100 h-100" src={fundoBikes} alt="Bikes"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column">
                                    <span>BIKES</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="bikes" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <Image className="w-100 h-100" src={fundoPecas} alt="Peças"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column ">
                                    <span>PEÇAS</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="pecas" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <Image className="w-100 h-100" src={fundoQuadros} alt="Quadros"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column ">
                                    <span>QUADROS</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="quadros" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <Image className="w-100 h-100" src={fundoRoupas} alt="Roupas"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column ">
                                    <span>ROUPAS</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="roupas" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}