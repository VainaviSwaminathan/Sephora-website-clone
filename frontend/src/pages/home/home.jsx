import { ImageSlider } from "../../components/image slider/imageSlider"
import './home.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
function Home() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const spotlightProducts = [
        {
            "id": 40,
            "category": "body",
            "type": "lotion",
            "Brand": "Sol de Janeiro",
            "image": "https://www.sephora.com/productimages/sku/s2205359-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=500",
            "title": "Glowmotion Body Oil",
            "price": 4200,
            "description": "A luminizing, hydrating, soft-shimmer glow oil for the body and face with a buildable, visibly blurring tint that gives a healthy-looking, visibly gorgeous glow for all skin tones."
        },
        {
            "id": 41,
            "category": "body",
            "type": "lotion",
            "Brand": "Rare Beauty",
            "image": "https://www.sephora.com/productimages/sku/s2734036-main-zoom.jpg?imwidth=500",
            "title": "Hydrating hand cream",
            "price": 1300,
            "description": "A fast-absorbing hand cream with a bright, uplifting scent that hydrates for up to 16 hours while softening skin with a fresh, non-greasy feel."
        },
        {
            "id": 32,
            "category": "fragrance",
            "type": "mist",
            "Brand": "Sol de Janeiro",
            "image": "https://www.sephora.com/productimages/sku/s2461812-main-zoom.jpg?imwidth=500",
            "title": "Brazillian Crush 40 Bom mist",
            "price": 4800,
            "description": "An intoxicating yet delicate fragrance sparked with notes of black amber plum, vanilla woods, and jasmine blooms."
        },
        {
            "id": 33,
            "category": "fragrance",
            "type": "Eua de Parfum",
            "Brand": "Dior",
            "image": "https://www.sephora.com/productimages/sku/s2467371-main-zoom.jpg?imwidth=500",
            "title": "Miss Dior Eau de Parfum",
            "price": 6800,
            "description": "Floral Scent parfume"
        },
        {
            "id": 35,
            "category": "fragrance",
            "type": "mist",
            "Brand": "Sol de Janeiro",
            "image": "https://www.sephora.com/productimages/sku/s1930759-main-zoom.jpg?imwidth=500",
            "title": "62 Bum Hair and Body mist",
            "price": 4400,
            "description": "Warm & Spicy Scent parfume"
        },
        {
            "id": 1,
            "category": "makeup",
            "type": "blush",
            "Brand": "Rare Beauty",
            "image": "https://www.sephora.com/productimages/sku/s2640241-main-zoom.jpg?imwidth=320",
            "title": "Rare Beauty Liquid blush",
            "price": 3000,
            "description": "A weightless, long-lasting mini liquid blush that blends and builds beautifully for a soft, healthy flush."
        },
        {
            "id": 2,
            "category": "makeup",
            "type": "lip",
            "Brand": "Summer Fridays",
            "image": "https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?pb=allure-2023-bestofbeauty-badge&imwidth=500",
            "title": "Summer Fridays lip butter",
            "price": 2000,
            "description": "A silky tinted vegan balm that hydrates and soothes dry lips in seconds.Comes in many shades."
        },
        {
            "id": 3,
            "category": "makeup",
            "type": "lip",
            "Brand": "Benefit",
            "image": "https://www.sephora.com/productimages/sku/s2264638-main-zoom.jpg?imwidth=500",
            "title": "Benetint lip and cheek tint",
            "price": 2500,
            "description": "lip and cheek tints that come in a range of shades,long-wearing, non-drying, and transfer-proof."
        },
        {
            "id": 10,
            "category": "makeup",
            "type": "Foundation",
            "Brand": "Haus Labs",
            "image": "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?pb=allure-2023-clean-badge&imwidth=500",
            "title": "Medium Coverage Foundation",
            "price": 2000,
            "description": "A medium coverage, weightless, clean foundation with fermented arnica that helps reduce redness and protects from environmental stress."
        },
        {
            "id": 11,
            "category": "makeup",
            "type": "powder",
            "Brand": "Charlotte Tilbury",
            "image": "https://www.sephora.com/productimages/sku/s2605988-main-zoom.jpg?imwidth=500",
            "title": "Airbrush Flawless setting powder",
            "price": 2000,
            "description": "An ultra-fine setting powder that blurs imperfections and visibly reduces shine."
        }
    ]

    const newArrivals = [
        {
            "id": 16,
            "category": "skincare",
            "type": "Face wash",
            "Brand": "Youth To The People",
            "image": "https://www.sephora.com/productimages/sku/s1863588-main-zoom.jpg?pb=clean-at-sephora&imwidth=500",
            "title": "Superfood antioxidant cleanser",
            "price": 3700,
            "description": "A pH-balanced, non-drying face cleanser formulated with antioxidants to gently yet effectively remove makeup, SPF, and excess oils that can clog pores."
        },
        {
            "id": 17,
            "category": "skincare",
            "type": "Exfoliater",
            "Brand": "Paula's Choice",
            "image": "https://www.sephora.com/productimages/sku/s2421360-main-zoom.jpg?imwidth=500",
            "title": "Skin perfecting 2% BHA exfoliant",
            "price": 2700,
            "description": " Best-selling 2% BHA is a gentle leave-on exfoliant with salicylic acid & green tea that unclogs pores & controls oil for clear skin. "
        },
        {
            "id": 18,
            "category": "skincare",
            "type": "serum",
            "Brand": "The Inkey List",
            "image": "https://www.sephora.com/productimages/sku/s2335594-main-zoom.jpg?pb=clean-at-sephora&imwidth=500",
            "title": "15% Vitamin C serum",
            "price": 4500,
            "description": "A skin-brightening face serum with vitamin C and plant-derived peptide EGF to target hyperpigmentation and visibly brighten dull skin."
        },
        {
            "id": 19,
            "category": "skincare",
            "type": "Face wash",
            "Brand": "The Ordinary",
            "image": "https://www.sephora.com/productimages/sku/s2278091-main-zoom.jpg?imwidth=500",
            "title": "Squaline Cleanser",
            "price": 1500,
            "description": "A gentle, moisturizing facial cleanser."
        },
        {
            "id": 20,
            "category": "skincare",
            "type": "Exfoliater",
            "Brand": "Dermalogica",
            "image": "https://www.sephora.com/productimages/sku/s2221133-main-zoom.jpg?imwidth=500",
            "title": "Daily Microfoliant Exfoliator",
            "price": 2500,
            "description": "A gentle, rice-based powder exfoliant that visibly brightens, improves the look of skin‘s texture, and clears pores."
        },
        {
            "id": 21,
            "category": "skincare",
            "type": "cream",
            "Brand": "Tatcha",
            "image": "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?pb=clean-at-sephora&imwidth=500",
            "title": "The Dewy Skin pluming cream",
            "price": 3600,
            "description": "A rich moisturizer that hydrates, seals in moisture, visibly plumps fine lines, and protects from skin-aging oxidative stress."
        },
        {
            "id": 22,
            "category": "haircare",
            "type": "oil",
            "Brand": "Gisou",
            "image": "https://www.sephora.com/productimages/sku/s2380285-main-zoom.jpg?pb=allure-2023-bestofbeauty-badge&imwidth=500",
            "title": "Honey infused hair oil",
            "price": 2400,
            "description": "A luxurious hair oil enriched with the moisture binding Gisou Mirsalehi Honey to hydrate, boost shine, and smooth frizz and flyaways."
        },
        {
            "id": 23,
            "category": "haircare",
            "type": "conditioner",
            "Brand": "dae",
            "image": "https://www.sephora.com/productimages/sku/s2768778-main-zoom.jpg?pb=clean-at-sephora&imwidth=500",
            "title": "Mirage Mist leave-in conditioner",
            "price": 3400,
            "description": "This weightless, multitasking leave-in conditioner works like a daedream to detangle, condition, prime and protect hair from heat up to 450°F/232°C"
        }
    ]

    const popular = [
        {
            "id": 28,
            "category": "haircare",
            "type": "shampoo",
            "Brand": "Olaplex",
            "image": "https://www.sephora.com/productimages/sku/s2118867-main-zoom.jpg?imwidth=500",
            "title": "No: 4 Bonding hair shampoo",
            "price": 2500,
            "description": " A hydrating shampoo that repairs and leaves hair healthier, smoother, and shinier with each use. Proven to reduce breakage and strengthen all types of hair."
        },
        {
            "id": 29,
            "category": "haircare",
            "type": "shampoo",
            "Brand": "OUAI",
            "image": "https://www.sephora.com/productimages/sku/s2319820-main-zoom.jpg?imwidth=500",
            "title": "Detox shampoo",
            "price": 3900,
            "description": "A clarifying shampoo that deeply cleanses away dirt, oil, and product buildup with apple cider vinegar while keratin helps strengthen hair."
        },
        {
            "id": 30,
            "category": "haircare",
            "type": "conditioner",
            "Brand": "OUAI",
            "image": "https://www.sephora.com/productimages/sku/s2319903-main-zoom.jpg?imwidth=500",
            "title": "thick hair conditioner",
            "price": 2900,
            "description": "For thick hair, this color-safe conditioner deeply moisturizes to fight frizz, nourish & repair. It also leaves you hair looking & smelling amazing."
        },
        {
            "id": 5,
            "category": "makeup",
            "type": "lip",
            "Brand": "Gisou",
            "image": "https://www.sephora.com/productimages/sku/s2683464-main-zoom.jpg?pb=clean-at-sephora&imwidth=500",
            "title": "Honey infused hydratating lip oil",
            "price": 2000,
            "description": "A lip oil powered by Mirsalehi honey and bee garden oils to intensely hydrate lips and lock in moisture with a high-shine and non-sticky finish."
        },
        {
            "id": 6,
            "category": "makeup",
            "type": "blush",
            "Brand": "Rare Beauty",
            "image": "https://www.sephora.com/productimages/sku/s2748333-main-zoom.jpg?imwidth=500",
            "title": "Luminous Powder Blush",
            "price": 4000,
            "description": "A lightweight glowy blush with buildable, seamless, and silky color to keep you beaming all day."
        },
        {
            "id": 7,
            "category": "makeup",
            "type": "lip",
            "Brand": "Laneige",
            "image": "https://www.sephora.com/productimages/sku/s2743060-main-zoom.jpg?imwidth=500",
            "title": "Lip Glowy Balm",
            "price": 1000,
            "description": "A lightweight, moisture-rich lip balm with shea and murumuru seed butters for extra soft, hydrated, kissable lips throughout the day."
        }
    ]

    return (
        <main>
            <ImageSlider />

            <div className="Product-Slider-Container">
                <h2>Spotlight Today!</h2>
                <Carousel responsive={responsive}>
                    {
                        spotlightProducts.map((item) => {
                            return (<div className="productCard" key={item.id}>
                                <Link to={`/${item.category}/${item.id}`} >


                                    <img src={item.image} alt={item.title} />
                                    <p>{item.Brand}</p>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>


                                </Link>
                            </div>)
                        })
                    }

                </Carousel>
            </div>
            <div className="Product-Slider-Container">
                <h2>New Arrivals!</h2>
                <Carousel responsive={responsive}>
                    {
                        newArrivals.map((item) => {
                            return (<div className="productCard" key={item.id}>
                                <Link to={`/${item.category}/${item.id}`} >


                                    <img src={item.image} alt={item.title} />
                                    <p>{item.Brand}</p>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>


                                </Link>
                            </div>)
                        })
                    }

                </Carousel>
            </div>
            <div className="Product-Slider-Container">
                <h2>Popular!</h2>
                <Carousel responsive={responsive}>
                    {
                        popular.map((item) => {
                            return (<div className="productCard" key={item.id}>
                                <Link to={`/${item.category}/${item.id}`} >


                                    <img src={item.image} alt={item.title} />
                                    <p>{item.Brand}</p>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>


                                </Link>
                            </div>)
                        })
                    }

                </Carousel>
            </div>



        </main>

    )
}

export { Home }