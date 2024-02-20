<template>
  <div class="flex h-screen items-center justify-center bg-blue-500 text-white">
    <div>
      <div style="font-size: 20vh">404</div>
      <div class="text-4xl mb-10 text-center" style="opacity: 0.4">ページが見つかりません</div>
      <div class="text-center">
        <router-link to="/">
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            トップページへ戻る
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
