<script lang="ts">
  import { createPost } from '$lib/storage';

  let title = '';
  let text = '';

  function save() {
    const id = createPost(title, text);
    window.location.href = `/post/${id}`;
  }
</script>

<div class="max-w-xl mx-auto p-4 space-y-3">
  <h1 class="text-2xl font-bold">Новый пост</h1>

  <input class="border w-full p-2 rounded" bind:value={title} placeholder="Заголовок" />
  <textarea class="border w-full p-2 rounded h-48" bind:value={text} placeholder="Текст"></textarea>

  <button class="bg-green-600 text-white px-4 py-2 rounded" on:click={save}>
    Сохранить
  </button>
</div>
