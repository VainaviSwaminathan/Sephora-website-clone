import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { AddToCartBtn } from '../components/AddToCartbtn';
import { useCart } from '../context/CartContext';


function ProductDetail() {
    const { category, id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id.toString() === id && p.category === category);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="productPage_container">
            <div className="Product_image_wrapper">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product_description">
                <div>
                    <h3 className='brand'>{product.Brand}</h3>
                    <h1>{product.title}</h1>
                </div>
                <p className='price'>₹{product.price}</p>
                <p>{product.description}</p>
                <AddToCartBtn product={product} btnText="Add to Cart" />
                <AddToCartBtn product={product} btnText="Add to Wishlist" />
            </div>


        </div>
    );
}

export { ProductDetail };
