import { useState, useEffect } from 'react';
import axios from 'axios';

const MainComponent = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5150/api/products');
                setAllProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:5150/api/cartitems');
                setCartItems(response.data);
                updateCartSummary(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchProducts();
        fetchCartItems();
    }, []);
    useEffect(() => {
        updateCartSummary(cartItems);
    }, [cartItems]);

    const updateCartSummary = (items) => {
        const totalAmount = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
        const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
        setTotal(totalAmount);
        setCountProducts(totalCount);
    };
    const onAddProduct = async (product) => {
        try {
            const existingCartItem = cartItems.find(item => item.productId === product.productId);
            if (existingCartItem) {
                const updatedCartItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
                await axios.put(`http://localhost:5150/api/cartitems/${existingCartItem.cartItemId}`, updatedCartItem);
                const updatedCartItems = cartItems.map(item =>
                    item.cartItemId === existingCartItem.cartItemId ? updatedCartItem : item
                );
                setCartItems(updatedCartItems);
                setTotal(total + product.price);
                setCountProducts(countProducts + 1);
            } else {
                const newCartItem = {
                    cartId: 1, // Aquí deberías obtener el CartId del usuario actualmente conectado o gestionarlo de alguna manera adecuada
                    productId: product.productId,
                    quantity: 1,
                    addedAt: new Date().toISOString() // Ajusta la fecha según lo que necesites en tu aplicación
                };
                const response = await axios.post('http://localhost:5150/api/cartitems', newCartItem);
                setCartItems([...cartItems, response.data]);
                setTotal(total + product.price);
                setCountProducts(countProducts + 1);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };


    const onDeleteProduct = async (cartItemId) => {
        try {
            await axios.delete(`http://localhost:5150/api/cartitems/${cartItemId}`);
            const remainingCartItems = cartItems.filter(item => item.cartItemId !== cartItemId);
            setCartItems(remainingCartItems);
            updateCartSummary(remainingCartItems);
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    };

    const onCleanCart = () => {
        setCartItems([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <>
            <header>
                <h1>EcuadorMikuna</h1>
                <div className='cart'>
                    <button className='cart-button' onClick={() => setIsCartOpen(!isCartOpen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H4V4H2V6H0V8H2V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V8H24V6H22V4H20V6H18V4H16V6H8V4H6V6ZM4 8V20H20V8H4ZM6 10H18V18H6V10Z" fill="black" />
                        </svg>
                        <span>({countProducts})</span>
                    </button>
                    {isCartOpen && (
                        <div className='cart-dropdown'>
                            {cartItems.length ? (
                                <>
                                    {cartItems.map(cartItem => (
                                        <div className='cart-item' key={cartItem.cartItemId}>
                                            <img src={cartItem.product.imageUrl} alt={cartItem.product.productName} className='product-image' />
                                            <div className='product-details'>
                                                <span className='product-name'>{cartItem.product.productName}</span>
                                                <span>{cartItem.quantity} x ${cartItem.product.price.toFixed(2)}</span>
                                                <button onClick={() => onDeleteProduct(cartItem.cartItemId)}>Eliminar</button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='cart-total'>
                                        Total: ${total.toFixed(2)}
                                    </div>
                                    <button onClick={onCleanCart}>Vaciar Carrito</button>
                                </>
                            ) : (
                                <p className='cart-empty'>Carrito vacío</p>
                            )}
                        </div>
                    )}
                </div>

            </header>

            <div className='container-items'>
                {allProducts.length ? (
                    allProducts.map(product => (
                        <div className='item' key={product.productId}>
                            <figure>
                                <img src={product.imageUrl} alt={product.productName} />
                            </figure>
                            <div className='info-product'>
                                <h2>{product.productName}</h2>
                                <p className='price'>${product.price}</p>
                                <button onClick={() => onAddProduct(product)}>
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='cart-empty'>No se encontraron productos</p>
                )}
            </div>
        </>
    );
};

export default MainComponent;

