<template>
  <div class="github-repos">
    <h2>Github Repositories</h2>
    <p v-if="loading">Loading...</p>
    <ul>
      <li v-for="(repo, index) in repos" :key="repo.id">
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
        <span>作者：{{ repo.owner.login }}</span>
      </li>
    </ul>
    <p v-show="!loading && repos.length === 0">没有repos</p>
    <p v-show="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const repos = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/123Glh/repos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    repos.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* 添加你自己的样式 */
.github-repos {
  max-width: 600px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>