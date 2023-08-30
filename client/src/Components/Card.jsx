import { Link } from 'react-router-dom';

const Card = ({ id, title, author, category }) => {
    return (
        <div className="cards">
            <div className="card">
                <h2 className="title">{title} par {author}</h2>
                <Link to={`/post/${id}`}>
                    <h3>{category}</h3>
                </Link>
            </div>
        </div>
    );
};

export default Card;