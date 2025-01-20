<script setup lang="ts">
import { fetchCategories } from '@/services/category.service.js';
import { onMounted, ref } from "vue";


const items = ref<string[]>([])

// Hàm gọi API
const fetchData = async () => {
  try {
    fetchCategories().then((data) => {
      items.value = data;
    }).catch((error) => {
      console.log(error);
    });

  } catch (error) {
    console.error("Lỗi khi gọi API:", error)
  }
}

// Gọi API khi component được mount
onMounted(fetchData)
</script>

<template>
  <div>
    <h1>Danh sách dữ liệu từ API</h1>
    <div>
      <button v-for="(item, index) in items" :key="index">
        {{ item?.title }}
      </button>
    </div>
  </div>
</template>

<style>
/* Thêm CSS nếu cần */
button {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
