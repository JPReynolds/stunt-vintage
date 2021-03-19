import ProductCard from "./ProductCard";
import styles from '../../styles/Products.module.css';
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const ALL_PRODUCTS_QUERY = gql`
    query GetProducts {
        products {
          id
          product_name
          product_price
          product_images {
              url
          }
        }
      }
    `

const ProductList = () => {
    const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);
    
    if (loading) return <p>Loading...</p>

    const { products } = data;
    console.log(products)

    return (
      <div className={styles["product-list"]}>
          <h2 className={styles["products-title"]}>LATEST PRODUCTS</h2>
          <p className="link ">VIEW ALL</p>
        <div className={styles.products}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
      </div>
    )
}

export default ProductList;