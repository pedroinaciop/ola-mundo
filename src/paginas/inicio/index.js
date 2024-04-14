import Banner from 'componentes/Banner';
import posts from 'assets/json/posts.json';
import Post from 'componentes/Post';

import styles from './Inicio.module.css';

export default function Inicio() {
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                       <Post post={post}/> 
                    </li>
                ))}
            </ul>
        </main>
    );
}