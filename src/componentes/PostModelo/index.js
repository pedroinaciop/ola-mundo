import styles from './PostModelo.module.css';

export default function PostModelo({ children, titulo, fotoCapa }) {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{ backgroundImage: `url(${fotoCapa})` }}>
                <h2 className={styles.titulo}>{titulo}</h2>
                
            </div>
            <div className={styles.postConteudoContainer}>
                    {children}
                </div>
        </article>
    );  
}