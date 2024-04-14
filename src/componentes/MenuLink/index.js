import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, rote }) {

    return (
        <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.linkDestacado : ''}`} to={rote}>{children}</NavLink>
    );
}