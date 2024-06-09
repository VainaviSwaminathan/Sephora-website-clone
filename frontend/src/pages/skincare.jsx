import { useState, useEffect } from "react";
import products from '../data/products.json';
import { Link } from 'react-router-dom'

function Skincare() {
    const [skinProducts, setSkinProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [sortedData, setSortedData] = useState("asc");

    useEffect(() => {
        let filteredProducts = products.filter(product => product.category === 'skincare');

        if (category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.type === category);
        }

        if (sortedData === "asc") {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }

        setSkinProducts(filteredProducts);
    }, [category, sortedData]);

    return (
        <section className="category_page" id="Makeup">
            <section className="filter_sidebar">
                <p className="filter_title">Sort by Category</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">all</option>
                    <option value="cream">cream</option>
                    <option value="Face wash">Face Wash</option>
                    <option value="Exfoliater">Exfoliater</option>
                    <option value="serum">serum</option>
                    <option value="Toner">Toner</option>
                </select>
                <p className="filter_title">Sort by price</p>
                <select value={sortedData} onChange={(e) => setSortedData(e.target.value)}>
                    <option value="asc">Lowest to Highest</option>
                    <option value="desc">Highest to lowest</option>
                </select>
            </section>
            <section className="Product_container">
                {skinProducts.map((item) => (
                    <div className="productCard" key={item.id}>
                        <Link to={`/skincare/${item.id}`} >


                            <img src={item.image} alt={item.title} />
                            <p>{item.Brand}</p>
                            <p>{item.title}</p>
                            <p>{item.price}</p>


                        </Link>
                    </div>

                ))}
            </section>
        </section>
    );
}

export { Skincare };
