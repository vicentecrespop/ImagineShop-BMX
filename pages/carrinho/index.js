import { CartContext } from "@/contexts/CartContext"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)

export default function Carrinho() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [number, setNumber] = useState('')
    const [enablePurchase, setEnablePurchase] = useState(false)

    const [products, setProducts] = useState([])
    const { getProducts, getTotalValue, getTotalProducts, getShippingValue, clearAll } = useContext(CartContext)



    useEffect(() => {
        enableCheckout()
    }, [name, email, address, cep, complement, number])

    useEffect(() => {
        if(products.length === 0) {
            const cartProducts = getProducts()
            setProducts(cartProducts)
        }
    }, [])

    const ProductsTotal = () => {
        const total = getTotalProducts(products)
        return (
            <span className="mb-3 mt-5">Produtos : {total}</span>
        )
    }

    const ShippingTotal = () => {
        const total = getShippingValue()
        return (
            <span className="mb-3">Frete: {total}</span>
        )
    }

    const Total = () => {
        const total = getTotalValue(products)
        return (
            <span className="mb-3">Total: {total}</span>
        )
    }

    const emptyCart = () => {
        toast.success('Carrinho esvaziado.', {
            position: 'bottom-right',
            autoClose: 1000
        })
        clearAll()
        setProducts([])
        setEnablePurchase(false)
    }

    const checkoutError = () => {
        let msg = 'Preencha todos os campos.'
        if(products.length === 0) {
            msg = 'Adicione produtos no carrinho.'
        }
        toast.error(msg, {
            position: 'bottom-right',
            autoClose: 1000
        })
        return
    }

    const enableCheckout = () => {
        if(!name || !email || !address || !complement || !number || products.length === 0) {
            setEnablePurchase(false)
            return 
        }
        if(!!name && !!email && !!address && !!complement && !!number && !!products.length > 0) {
            setEnablePurchase(true)
            return 
        }
    }

    return (
        <>
            <form action="/api/checkout" method="POST" className="hero w-100 d-flex px-5 my-5">

                <div className="cart-left flex-grow-1 d-flex flex-column">
                    {products.map((product, index) => (
                        <div key={index} className="d-flex align-items-center">
                            <div>
                                <Image src={`/img/${product.imgName}`} width={100} height={100} alt={product.name}/>
                            </div>
                            
                            <span className="ms-3">{product.name}</span>
                        </div>
                    ))}
                    {products.length > 0 && (
                        <div className="text-center mt-5">
                            <span onClick={() => emptyCart()} className="text-decoration-underline pointer">Esvaziar o carrinho</span>
                        </div>
                        )
                    }
                </div>
                <div className="cart-right flex-grow-1 d-flex flex-column justify-content-between align-items-end mt-4">
                    <div className="d-flex flex-column w-100">
                        <input className="px-3 py-2 mb-2 rounded-2 fs-5 bg-light border-0" type="text" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <input className="px-3 py-2 mb-2 rounded-2 fs-5 bg-light border-0" type="text" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="px-3 py-2 mb-2 rounded-2 fs-5 bg-light border-0" type="text" name="address" placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <input className="px-3 py-2 mb-2 rounded-2 fs-5 bg-light border-0" type="text" name="cep" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                        <input className="px-3 py-2 mb-2 rounded-2 fs-5 bg-light border-0" type="text" name="complement" placeholder="Complemento" value={complement} onChange={(e) => setComplement(e.target.value)} />
                        <input className="px-3 py-2 mb-2 rounded-2 fs-5 bg-light border-0" type="text" name="number" placeholder="Número" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <input type="hidden" name="products" value={JSON.stringify(products)} />
                    </div>
                    <div className="d-flex flex-column align-items-end me-3">
                        <ProductsTotal />
                        <ShippingTotal />
                        <Total />
                    </div>
                    {!enablePurchase && (
                        <div onClick={() => checkoutError()} 
                            className="bg-secondary border-0 text-black px-5 py-3 rounded-5 fw-bold pointer"
                            >
                                Finalizar Compra
                        </div>
                    )
                    }
                    {enablePurchase && (
                        <button type="submit" id="checkout-btn" className="bg-danger border-0 text-white px-5 py-3 rounded-5 fw-bold">Finalizar Compra</button>
                    )
                    }
                </div>
            </form>
            <ToastContainer />
        </>
    )
}