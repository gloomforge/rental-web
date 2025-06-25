import { useParams } from 'react-router';

export function ProductPage() {
  const { productId } = useParams();

  // Here you could fetch product data based on productId
  // const product = useProduct(productId);

  return (
    <div>
      <h2>Product: {productId}</h2>
      {/* Render product details here */}
    </div>
  );
}
