<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from '$lib/types';
  import { getPosts } from '$lib/storage';

  let posts: Post[] = [];

  onMount(() => {
    posts = getPosts().sort(
      (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()
    );
  });
</script>

<div class="max-w-xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Мои посты</h1>

  <a href="/create" class="block bg-blue-600 text-white px-4 py-2 rounded mb-4 text-center">
    Новый пост
  </a>

  {#each posts as p}
    <a href={`/post/${p.id}`}
       class="block border p-3 rounded mb-3 hover:bg-gray-50">
      <div class="font-semibold">{p.title}</div>
      <div class="text-sm text-gray-500">Создан: {new Date(p.created).toLocaleString()}</div>
      <div class="text-sm text-gray-500">Изменён: {new Date(p.updated).toLocaleString()}</div>
    </a>
  {/each}
</div>
