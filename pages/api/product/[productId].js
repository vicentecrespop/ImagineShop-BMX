import { initMongoose } from "@/db/connection";
import Product from "@/models/Product";

export default async function handler(req, res) {

    if(req.method !== 'DELETE' && req.method !== 'POST' && req.method !== 'GET') {
        return res.status(401).json({ error: "Problema na requisição." })
    }

    await initMongoose()

    const { productId } = req.query
    // const product = await Product.findById(productId)
    // if(!product) {
    //     return res.status(401).json({ error: "Produto não encontrado." })
    // }

    if(req.method === 'GET') {
        // return res.status(200).json({ product })
        const products = await Product.find({$text: { $search: productId}})
        return res.status(200).json({ products })
    }

    if(req.method === 'DELETE') {

        try {
            await Product.deleteOne({_id: productId})
            return res.status(200).json({ msg: "Produto deletado com sucesso!" })
        } catch(error) {
            return res.status(501).json({ error })
        }
    }

    if(req.method === 'POST') {
        const product = await Product.findById(productId)
        const { newStock } = req.body
        const removeStock = product.inStock > 0 ? product.inStock - 1 : product.inStock
        const inStock = newStock ? newStock : removeStock
        try {
            await Product.updateOne({_id: productId}, {inStock: inStock})
            return res.status(200).json({ msg: `Estoque de ${product.name} atualizado com sucesso.` })
        } catch(error) {
            return res.status(501).json({ error })
        }

    }
}