import styles from './Nav.module.css';
import Logo from './Logo/Logo';
import CartIcon from '../Cart/CartIcon';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={`row m-0 ${styles.nav} align-items-center p-2`}>
            <Link to="/">
                <Logo />
            </Link>
            <div className="col-auto flex-grow-1 p-0">
                &nbsp;
            </div>
            <Link to="/cart" className="position-relative pr-2">
                <CartIcon fill="fff" />
                <div className={styles['cart-badge-wrapper']}>
                    <div>0</div>
                </div>
            </Link>
        </nav>
    )
}

export default Nav
