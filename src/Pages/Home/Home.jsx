/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { FaShoppingCart } from 'react-icons/fa';


const Home = ({products, handleCart}) => {
 
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });


    return (
        <div className="w-11/12 lg:w-3/4 mx-auto my-12">
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
                {
                    products.map(product => <div key={product.id} data-aos="zoom-in-down" className="card w-full bg-base-100 shadow-xl overflow-hidden">
                        <figure><img className="hover:scale-110 transition-all duration-300" src={product.thumbnail} alt="Product" /></figure>
                        <div className="card-body">

                            <div className="">
                                <Rating style={{ maxWidth: 120 }} value={product.rating} readOnly />
                            </div>
                            <h2 className="card-title">
                                {product.title}
                                <div className="badge border-red-600 badge-outline">-{product.discountPercentage}%</div>
                            </h2>
                            <p>{product.description}</p>
                            <div className="card-actions items-center justify-between">

                                <div className="text-2xl font-semibold text-orange-500">$ {product.price}</div>
                                <button onClick={() => handleCart(product)} className='border-2 border-orange-500 px-3 py-1 rounded-md text-2xl font-semibold hover:bg-orange-100 transition-all duration-300'>Cart <FaShoppingCart className='inline' /></button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Home;