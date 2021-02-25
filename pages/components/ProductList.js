import { useProductData } from "./hooks/useProductData";
import ProductCard from "./ProductCard";
import styles from '../../styles/Products.module.css'

const ProductList = () => {

    const truncateProducts = (data) => {
        return data.slice(0, 12);
    }

    const products = useProductData(truncateProducts);

    return (
      <div>
          <h2>LATEST PRODUCTS</h2>
        <div className={styles.products}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
      </div>
    )
}

export default ProductList;