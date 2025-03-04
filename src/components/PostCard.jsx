import { Link } from "react-router-dom";

export default function PostCard(props) {

    const { post } = props;

    return (
        <>
            {
                <div className='postItem' key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.tags.join(", ")}</p>
                    <Link to={`/list/${post.id}`}>Detail</Link>
                </div >
            }
        </>
    );
}