import Product from "../Product/Product";
import homeScreenStyles from './Homescreen.module.css';

function Homescreen() {
    return (
        <div className="container">
            <h2 className="font-bold">Latest Items</h2>
            <div className={homeScreenStyles['homescreen_products']}>
                <Product 
                    title="Product A"
                    imgSrc="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
                    description="Enim excepteur sit ipsum officia in amet deserunt esse eiusmod ad exercitation ullamco."
                    price="499.99"
                    productId='11111'
                />
            </div>         
        </div>
    )
}

export default Homescreen
