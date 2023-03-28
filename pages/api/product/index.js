import { initMongoose } from "@/db/connection"
import Product from "@/models/Product"

export default async function handler(req, res) {
    if(req.method !== 'POST' && req.method !== 'GET') {
        return res.status(401).json({ error: "Problema na requisição." })
    }

    await initMongoose()

    if(req.method === 'GET') {
        try {
            const products = await Product.find()
            return res.status(200).json({ products })
        } catch(error) {
            return res.status(501).json({ error })
        }
    }

    if(req.method === 'POST') {
        const {name, description, price, category, inStock, imgName, brand} = req.body
    
        if(!name || !price || !category || !inStock || !imgName) {
            return res.status(401).json({ error: "Por favor preencha todos os campos." })
        }
    
        const product = new Product({name, description, price, category, inStock, imgName, brand})
    
        try {
    
            await Product.create(product)
            return res.status(201).json({ msg: "Produto cadastrado com sucesso!", product })
    
        } catch(error) {
            return res.status(501).json({ error })
        }
    }



}