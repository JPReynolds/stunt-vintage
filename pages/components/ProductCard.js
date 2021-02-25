import styles from '../../styles/Products.module.css'

const ProductCard = (props) => {
    const { img_url, product_name, product_price } = props.product;

    return (
        <div  className={styles.product}>
            <img src={img_url} alt={product_name} width="200" height="250"/>
            <p>{product_name}</p>
            <p>{product_price}</p>
        </div>
    )

}

export default ProductCard;