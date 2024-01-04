import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";


const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    console.log(products);

    return (
        <div className="w-11/12 lg:w-3/4 mx-auto my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <div key={product.id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img className="" src={product.thumbnail} alt="Product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.title}
                                <div className="badge border-red-600 badge-outline">-{product.discountPercentage}%</div>
                            </h2>
                            <p>{product.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    
                                {/* <Rating style={{ maxWidth: 250 }} value={product.rating} readOnly /> */}
                                    </div>


                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Home;