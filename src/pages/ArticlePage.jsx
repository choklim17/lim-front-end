import { useParams } from "react-router-dom";
import articles from "../article-content";
import '../styles/ArticlePage.css'

function ArticlePage() {
    const { name } = useParams();
    const article = articles.find(article => article.name === name);

    return (
        <>
            <h1 className="article-page-title">{article.title}</h1>
            <h2 className="article-page-name">{article.name}</h2>
            <div className="article-page-contents">
                {article.content.map(p => <p key={p}>{p}</p>)}
            </div>
        </>
    );
}

export default ArticlePage;