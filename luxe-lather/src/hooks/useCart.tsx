import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number,
    cartProducts: CartProductType[] | null,
    handleAddProductToCart: (product: CartProductType) => void,
    handleDeleteProductFromCart: (product: CartProductType) => void,
    handleCartQtyIncrease: (product: CartProductType) => void,
    handleCartQtyDecrease: (product: CartProductType) => void,
    handleClearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props{
    [propName: string]: any
}

export const CartContextProvider = (props:Props) => {

    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null >(null)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('luxeLatherCartItems')
        const cProduct: CartProductType[] | null = JSON.parse(cartItems)

        setCartProducts(cProduct)
    }, [])

    useEffect(()=>{
        const getTotals = () =>{

            if (cartProducts){

                const {total,qty} = cartProducts?.reduce((acc, item)=>{
                    const itemTotal = item.price * item.quantity

                    acc.total += itemTotal
                    acc.qty += item.quantity

                    return acc;
                },{
                    total: 0,
                    qty: 0
                });

                setCartTotalQty(qty)
                setCartTotalAmount(total)

            }
            
        }

        getTotals()

    },[cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev)=>{
            let updatedCart;

            if (prev){
                updatedCart = [...prev, product]
            }else{
                updatedCart = [product]
            }

            localStorage.setItem('luxeLatherCartItems', JSON.stringify(updatedCart))

            toast.success("Product added to cart successfully!")
            return updatedCart;
        })
    }, [])

    const handleDeleteProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts){
            const filteredProducts = cartProducts.filter
            ((item)=>{
                return item.id !=  product.id
            })

            setCartProducts(filteredProducts)

            localStorage.setItem('luxeLatherCartItems', JSON.stringify(filteredProducts))

            toast.success("Product removed from cart1!")

        }
    }, [cartProducts])

    const handleCartQtyIncrease = useCallback(
        (product : CartProductType) => {
            let updatedCart

            if (product.quantity == 99){
                return toast.error("Oops! Maximum reached");
            }

            if (cartProducts){
                updatedCart = [...cartProducts]

                const existingIndex = cartProducts.findIndex(
                    (item) => item.id == product.id
                )

                if (existingIndex > -1){
                    updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
                }

                setCartProducts(updatedCart)
                localStorage.setItem('luxeLatherCartItems', JSON.stringify(updatedCart))
            }
        }, [cartProducts]
    );

    const handleCartQtyDecrease = useCallback(
        (product : CartProductType) => {
            let updatedCart

            if (product.quantity == 1){
                return toast.error("Oops! Minimum reached");
            }

            if (cartProducts){
                updatedCart = [...cartProducts]

                const existingIndex = cartProducts.findIndex(
                    (item) => item.id == product.id
                )

                if (existingIndex > -1){
                    updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
                }

                setCartProducts(updatedCart)
                localStorage.setItem('luxeLatherCartItems', JSON.stringify(updatedCart))
            }
        }, [cartProducts]
    );


    const handleClearCart = useCallback(() => {
            setCartProducts(null)
            setCartTotalQty(0)
            localStorage.setItem('luxeLatherCartItems', JSON.stringify(null))
     }, [cartProducts]
    );

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleDeleteProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart
    }

    return <CartContext.Provider value={value} {...props}/>
};

export const useCart = () =>{
    const context = useContext(CartContext)

    if (context === null){
        throw new Error("useCart must be used within a cartContext provider")
    }
    return context ;
}