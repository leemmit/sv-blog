import type { Post } from './types';

const KEY = 'posts';

export function getPosts(): Post[] {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem(KEY) || '[]') as Post[];
}

export function savePosts(posts: Post[]): void {
    localStorage.setItem(KEY, JSON.stringify(posts));
}

export function createPost(title: string, text: string): string {
    const posts = getPosts();
    const now = new Date().toISOString();

    const post: Post = {
        id: crypto.randomUUID(),
        title,
        text,
        created: now,
        updated: now
    };

    posts.push(post);
    savePosts(posts);

    return post.id;
}

export function getPost(id: string): Post | null {
    const post = getPosts().find(p => p.id === id);
    return post || null;
}

export function updatePost(id: string, title: string, text: string): void {
    const posts = getPosts();
    const now = new Date().toISOString();

    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return;

    posts[index] = {
        ...posts[index],
        title,
        text,
        updated: now
    };

    savePosts(posts);
}
