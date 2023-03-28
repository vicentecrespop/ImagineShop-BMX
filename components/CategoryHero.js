import Link from "next/link"

export default function CategoryHero() {
    return (
            <div className="p-5 text-center">
                <h2 className="fw-bold">TOP CATEGORIAS</h2>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0062/5708/2479/files/Category_Collection_Block_Bikes_656c6e50-f08e-4e49-9405-abdc28fa396a_360x.jpg?v=1673259370" alt="Bikes"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column">
                                    <span>BIKES</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="bikes" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0062/5708/2479/files/Category_Collection_Block_Parts_92beabf1-a021-421d-823d-b34e12ae8456_400x.jpg?v=1673259383" alt="Peças"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column ">
                                    <span>PEÇAS</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="pecas" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0062/5708/2479/files/Category_Collection_Block_Frames_174d16ac-f68d-47ec-8066-682b1444be57_360x.jpg?v=1673259384" alt="Quadros"/>
                                <div className="category-item--info position-absolute bg-dark bg-opacity-75 text-center fw-bold text-white d-flex flex-column ">
                                    <span>QUADROS</span>
                                    <span className="my-2">ATÉ 50% OFF</span>
                                    <Link href="quadros" className="bg-color-primary text-decoration-none text-white border-0 p-2 fw-bold">VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="category-item position-relative border border-primary d-flex justify-content-center align-items-end">
                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0062/5708/2479/files/Category_Collection_Block_Softgoods_ce69286b-6dec-4a6c-954d-6605fa295ae2_360x.jpg?v=1673259383" alt="Roupas"/>
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