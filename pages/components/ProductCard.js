import styles from '../../styles/Products.module.css'

const ProductCard = (props) => {
    const { product_images, product_name, product_price } = props.product;

    return (
        <div  className={styles.product}>
            <img src={`http://localhost:1337${product_images[0]}`} alt={product_name} width="200" height="250"/>
            <p className={styles["product-name"]}>{product_name}</p>
            <p className={styles["product-price"]}>{product_price}</p>
        </div>
    )

}

export default ProductCard;