import { useEffect, useState } from 'react';

export type Post = {
    id: number;
    title: string;
    body: string;
};

const LIMIT = 5;

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const fetchPosts = async (page: number) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${page}`
            );
            const data = await res.json();
            setPosts((prev) => [...prev, ...data]);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => setPage((prev) => prev + 1);

    return { posts, loading, loadMore };
}