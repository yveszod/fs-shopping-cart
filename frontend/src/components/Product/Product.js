import productStyles from './Product.module.css';
import {Link} from 'react-router-dom';

const Product = ({title, imgSrc, description, price, productId}) => {
    return (
        <div className={productStyles['product-card']}>
            <img src={imgSrc} alt="a" title="a" />
            <div className="pl-2 pr-2 pt-1 pb-1 font-bold">
                {title}    
            </div>
            <div className="pl-2 pr-2 pt-1 pb-1 font-light">
                {description}
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <div className="pl-2 pr-2 pt-1 pb-1 font-bold">
                        ${price}
                    </div>
                </div>
                <div className="col-auto">
                    <Link className={`ml-2 mr-2 mt-1 mb-1 d-block ${productStyles['view_btn']}`} to={`/product/${productId}`}>
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
