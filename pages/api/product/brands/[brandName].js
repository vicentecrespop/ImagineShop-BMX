import { initMongoose } from "@/db/connection"
import Product from "@/models/Product"

export default async function handler(req, res) {
    if(req.method !== 'GET') {
        return res.status(401).json({ error: 'Problema na requisição.' })
    }

    await initMongoose()

    const { brandName } = req.query
    try {
        const products = await Product.find({ brand: brandName })
        return res.status(200).json({ products })
    } catch(error) {
        return res.status(501).json({ error })
    }
}