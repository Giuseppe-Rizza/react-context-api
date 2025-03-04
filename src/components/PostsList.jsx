import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

import PostCard from "./PostCard";

export default function PostsList() {

    const { post } = useContext(GlobalContext);

    return (
        <>
            {
                post.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </>
    );
}