<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from '$lib/types';
  import { getPost, updatePost } from '$lib/storage';

  export let params: { id: string };

  let title = '';
  let text = '';

  onMount(() => {
    const p: Post | null = getPost(params.id);
    if (p) {
      title = p.title;
      text = p.text;
    }
  });

  function save() {
    updatePost(params.id, title, text);
    window.location.href = `/post/${params.id}`;
  }
</script>

<div class="max-w-xl mx-auto p-4 space-y-3">
  <h1 class="text-2xl font-bold">Редактирование</h1>

  <input class="border w-full p-2 rounded" bind:value={title} />
  <textarea class="border w-full p-2 rounded h-48" bind:value={text}></textarea>

  <button class="bg-green-600 text-white px-4 py-2 rounded" on:click={save}>
    Сохранить
  </button>
</div>
