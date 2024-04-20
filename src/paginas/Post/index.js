import { Route, Routes, useParams } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "paginas/NaoEncontrada";
import PostModelo from "componentes/PostModelo";
import PostCard from "componentes/PostCard";
import ReactMarkdown from "react-markdown";
import posts from "assets/json/posts.json";
import styles from "./Post.module.css";
import "./Post.css";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if(!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a,b) => b.id - a.id)
    .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo fotoCapa={post.imagem} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutorsPosts}>
                            Outros posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post}/>
                            </li>
                        ))}
                        </ul>
                    </PostModelo>}>
                </Route>
            </Route>
        </Routes> 
    );
}