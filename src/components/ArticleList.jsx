import { Link } from "react-router-dom";
import '../styles/ArticleList.css';

function ArticleList({ articles }) {
    return (
        <>
            {articles.map(a => (
                <div key={a.name} className="article-list-container">
                    <Link to={`/articles/${a.name}`} className="article-list">
                        <h3>{a.title}</h3>
                        <p>{a.content[0].substring(0, 150)}</p>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default ArticleList;