import PostCard from 'componentes/PostCard';
import posts from 'assets/json/posts.json';
import styles from './Inicio.module.css';

export default function Inicio() {
    return (
        <div>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/> 
                    </li>
                ))}
            </ul>
        </div>
    );
}