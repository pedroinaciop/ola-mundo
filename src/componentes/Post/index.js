import styles from './Post.module.css'

export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <img className={styles.Capa} src={`assets/posts/${post.id}/capa.png`} alt='Imagem de capa do post'/>
            <h1 className={styles.titulo}>{post.titulo}</h1>
        </div>
    ) 
}