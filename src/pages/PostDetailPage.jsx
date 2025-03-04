import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";


export default function PostDetailPage() {

    const { id } = useParams();

    const [list, setList] = useState({});

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setList(res.data))

            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [])

    return (
        <>
            <div className="postdetail">
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
            </div>
        </>
    );
}