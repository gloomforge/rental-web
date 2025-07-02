import { API_BASE } from '../../../config';

export async function fetchCategories() {
  const response = await fetch(`${API_BASE}/categories`, {
    method: 'GET',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Не удалось получить список категорий');
  }
  return response.json();
}

export function getCategoryImageUrl(imagePath) {
  if (!imagePath) return '';
  const filename = imagePath.split('/').pop();
  return `${API_BASE}/categories/images/${filename}`;
}
