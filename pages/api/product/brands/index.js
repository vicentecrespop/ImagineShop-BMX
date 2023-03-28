import { initMongoose } from "@/db/connection"
import Product from "@/models/Product"

export default async function handler(req, res) {

    if(req.method !== 'GET') {
        return res.status(401).json({ error: 'Problema na requisição.' })
    }

    await initMongoose()
    let allBrands = []

    try {
        const products = await Product.find({}, {brand: 1})
        products.map(product => {
            if(product?.brand) allBrands.push(product.brand)
        })
        const brands = [...new Set(allBrands)]
        return res.status(200).json({ brands })
    } catch(error) {
        return res.status(501).json({ error })
    }
}