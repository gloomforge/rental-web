import { API_BASE } from '../../../config';
import { fetchCategoryById } from '../../category';

export const fetchProductsByCategory = async (categoryId) => {
  const categoryData = await fetchCategoryById(categoryId);

  const response = await fetch(`${API_BASE}/category/products/${categoryData.name}`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Не удалось получить продукт');
  }

  return await response.json();
};

export function getProductImage(imagePath) {
  if (!imagePath) return '';
  const filename = imagePath.split('/').pop();
  return `${API_BASE}/category/products/images/${filename}`;
}

