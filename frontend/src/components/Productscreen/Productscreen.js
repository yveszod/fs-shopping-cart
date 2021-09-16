import productscreenStyles from './Productscreen.module.css';
import AddToCart from '../Cart/AddToCart';

const Productscreen = () => {
    return (
        <div className="container">
            <div className={`mt-4 mb-4 ${productscreenStyles['product-grid']}`}>
                <div>
                    <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="" title="" />
                </div>
                <div className="p-3">
                    <h1>iPhone 12</h1>
                    <div className="font-bold">
                        $499.99
                    </div>
                    <p className="font-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sunt illo reiciendis ut impedit recusandae veritatis molestiae doloremque, ad iusto non, quasi quaerat amet consequuntur. Dolorum velit laborum harum vel?
                    </p>
                    <div className="row">
                        <div className="col-auto">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <button onClick={ () => alert('Clicked') } type="button" className={`${productscreenStyles['addToCart_btn']} d-flex align-items-center`}>
                                <span className="mr-3">Add To Cart</span>
                                <AddToCart fill="fff" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productscreen
