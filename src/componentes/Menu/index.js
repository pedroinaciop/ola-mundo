import MenuLink from '../MenuLink';
import styles from'./Menu.module.css'
import logo from 'assets/logo.png';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
            <img src={logo} alt='logo' className={styles.logo}></img>
                <div>
                <MenuLink rote='/'>INÍCIO</MenuLink>
                <MenuLink rote='/sobre-mim'>SOBRE</MenuLink>
                </div>
            </nav>
        </header>
    );
}