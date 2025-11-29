<script lang="ts">
  import { createPost } from '$lib/storage';

  let title = '';
  let text = '';
  let error = '';

  function save() {
    if (!title.trim() || !text.trim()) {
      error = 'Заголовок и текст не могут быть пустыми.';
      return;
    }
    error = '';
    const id = createPost(title, text);
    window.location.href = `/post/${id}`;
  }

  function cancel() {
    window.location.href = '/';
  }
</script>

<div class="max-w-xl mx-auto p-4 space-y-3">
  <h1 class="text-2xl font-bold">Новый пост</h1>

  {#if error}
    <p class="text-red-500">{error}</p>
  {/if}

  <input class="border w-full p-2 rounded" bind:value={title} placeholder="Заголовок" />
  <textarea class="border w-full p-2 rounded h-48" bind:value={text} placeholder="Текст"></textarea>

  <div class="flex space-x-2">
    <button class="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700" on:click={save}>
      Сохранить
    </button>
    <button class="bg-gray-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700" on:click={cancel}>
      Отмена
    </button>
  </div>
</div>
