import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom'

function Cart() {
    const { cart, removeFromCart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="empty_cart_container">
                <img id="empty_cart" className="empty_cart_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwT4o-X8qXXCd_ddwWI5q2cFU9eXVN1JPtFRQlBr3BHKOzwBR8Ydjf7KHtrhdZknv4q5U&usqp=CAU" alt="Empty Cart" />
            </div>
        )
    }

    return (
        <section id="cart_pg">
            <div className="cart_total">
                <h2>Total Price: ₹{totalPrice}</h2>
            </div>

            <div className="cart_container">



                {cart.map(item => (
                    <div className="cartProductCard" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.Brand}</h3>
                            <h2>{item.title}</h2>
                            <p>₹{item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    )
}

export { Cart }