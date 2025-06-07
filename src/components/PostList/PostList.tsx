'use client';

import {usePosts} from "@/shared/hooks/usePosts";

export default function PostList() {
    const { posts, loading, loadMore } = usePosts();

    console.log('Posts:', posts.map(p => p.id));
    return (
        <section style={{ padding: 20 }}>
            <h1>Посты</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: 16 }}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <button onClick={loadMore} disabled={loading}>
                {loading ? 'Загрузка...' : 'Загрузить ещё'}
            </button>
        </section>
    );
}