import { deleteData, getData, postData, putData } from "./http-client"

export const fetchCategories = async () => {
  try {
    const categories = await getData("/categories")
    return categories.data
  } catch (error) {
    console.error("Lỗi khi gọi API:", error)
  }
}

const createCategory = async () => {
  try {
    const newCategory = { title: "New Category", description: "Description" }
    const data = await postData("/categories", newCategory) // Gọi API POST
    console.log("Đã tạo danh mục:", data)
  } catch (error) {
    console.error("Lỗi khi gọi API:", error)
  }
}

const updateCategory = async (id) => {
  try {
    const updatedCategory = { title: "Updated Title" }
    const data = await putData(`/categories/${id}`, updatedCategory) // Gọi API PUT
    console.log("Đã cập nhật danh mục:", data)
  } catch (error) {
    console.error("Lỗi khi gọi API:", error)
  }
}

const deleteCategory = async (id) => {
  try {
    const data = await deleteData(`/categories/${id}`) // Gọi API DELETE
    console.log("Đã xoá danh mục:", data)
  } catch (error) {
    console.error("Lỗi khi gọi API:", error)
  }
}
