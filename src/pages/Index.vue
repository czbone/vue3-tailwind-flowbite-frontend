<template>
  <div>
    <h2 class="text-4xl mb-4">メモリスト</h2>
    <ul>
      <li
        class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-300 my-3 h-16"
        v-for="(note, index) in notes"
        :key="index"
      >
        <span>{{ note }}</span>
        <button
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full p-1 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          @click="removeNote(index)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ul>
    <div class="flex justify-between items-center mt-10">
      <input
        type="text"
        v-model="newNote"
        class="rounded-lg w-5/6 border border-gray-400 p-2"
        placeholder="メモを入力"
        @keyup.enter="addNote"
      />
      <button
        class="ml-2 w-1/6 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
        @click="addNote"
      >
        追加
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNoteStore } from '@/stores/note'
import { ref } from 'vue'

const noteStore = useNoteStore()
const notes = noteStore.notes
const newNote = ref('')

const addNote = () => {
  if (newNote.value.trim()) {
    noteStore.addNote(newNote.value)
    newNote.value = ''
  }
}
const removeNote = (index: number) => {
  noteStore.removeNote(index)
}
</script>
