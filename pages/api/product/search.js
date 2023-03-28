import { initMongoose } from "@/db/connection"
import Product from "@/models/Product"

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(401).json({ error: "Problema na requisição." })
    }

    await initMongoose()

    const { name } = req.body

    if(!name) {
        return res.status(401).json({ error: "Por favor, insira o nome do produto em que deseja procurar." })
    }

    try {
        const products = await Product.find()
        const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
        if(searchedProducts.length === 0) {
            return res.status(401).json({ error: "Nenhum produto encontrado com esse nome." })
        }
        return res.status(200).json({ products: searchedProducts })
    } catch(error) {
        return res.status(501).json({ error })
    }
}