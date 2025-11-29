<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from '$lib/types';
  import { getPost } from '$lib/storage';

  export let params: { id: string };

  let post: Post | null = null;

  onMount(() => {
    post = getPost(params.id);
  });
</script>

{#if post}
<div class="max-w-xl mx-auto p-4 space-y-3">
  <h1 class="text-3xl font-bold">{post.title}</h1>

  <div class="text-sm text-gray-500">Создан: {new Date(post.created).toLocaleString()}</div>
  <div class="text-sm text-gray-500">Изменён: {new Date(post.updated).toLocaleString()}</div>

  <p class="whitespace-pre-line">{post.text}</p>

  <a href={`/post/${post.id}/edit`} class="inline-block bg-blue-600 text-white px-4 py-2 rounded">
    Редактировать
  </a>

  <a href="/" class="inline-block ml-2 text-blue-600">Назад</a>
</div>
{:else}
<p class="text-center p-4">Пост не найден</p>
{/if}
