import MenuLink from '../MenuLink';
import styles from'./Menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
            <img src='./logo.png' alt='logo' className={styles.logo}></img>
                <div>
                <MenuLink rote='/'>INÍCIO</MenuLink>
                <MenuLink rote='/sobre-mim'>SOBRE</MenuLink>
                </div>
            </nav>
        </header>
    );
}