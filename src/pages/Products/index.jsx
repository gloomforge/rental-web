import { useParams } from 'react-router';
import { ProductList } from '../../features/product';
import styles from '../../styles/HomePage.module.css'

export function ProductPage() {
  const { productId } = useParams();
  
  return ( 
    <div className={styles.wrapper}>
      <ProductList categoryId={productId} />
    </div>
  )
}
