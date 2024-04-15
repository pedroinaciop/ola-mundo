import posts from 'assets/json/posts.json';
import PostCard from 'componentes/PostCard';
import styles from './Inicio.module.css';

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/> 
                </li>
            ))}
        </ul>
    );
}