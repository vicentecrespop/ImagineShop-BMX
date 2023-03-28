import { initMongoose } from "@/db/connection";
import Order from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    await initMongoose()

    if(req.method !== 'POST') {
        return res.status(401).json({ error: 'Problema na requisição.' })
    }

    const {products, name, email, address, cep} = req.body

    let line_items = []
    const productsArray = JSON.parse(products)

    productsArray.map((item) => {
        line_items.push({
            quantity: 1,
            price_data: {
                currency: 'BRL',
                product_data: {name: item.name},
                unit_amount: (Number(item.price) *100).toFixed(0)
            }
        })
    })

    const order = await Order.create({
        products: line_items,
        name,
        email,
        address,
        cep,
        paid: 0
    })

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
            metadata: {orderId: order._id.toString()}
          });
          return res.redirect(303, session.url)
    } catch(e) {
        return res.status(e.statusCode || 500).json(e.message);
    }
}