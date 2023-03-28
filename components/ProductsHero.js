import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Product from "./Product";

export default function ProductsHero() {

    const [bikes, setBikes] = useState([])

    const getAllProducts = async () => {
        const completeBikes = []
        const res = await fetch('../api/product')
        const data = await res.json()
        const products = data.products
        products.map(product => {
            if(product.category === 'Bike') {
                completeBikes.push(product)
            }
        })
        setBikes(completeBikes)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className="text-center">
            <h2 className="fw-bold">TOP BIKES</h2>
            <div className="w-screen h-100 py-3">
                {bikes.length > 0 && (
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <div className="d-flex w-100 px-5 justify-content-around">
                                <Product product={bikes[0]}/>
                                <Product product={bikes[1]}/>
                                <Product product={bikes[2]}/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <div className="d-flex w-100 px-5 justify-content-around">
                                <Product product={bikes[3]}/>
                                <Product product={bikes[4]}/>
                                <Product product={bikes[5]}/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                )}
            </div>
        </div>
    )
}