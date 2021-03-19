import CarouselH from "./components/Carousel";
import ProductList from "./components/ProductList";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <CarouselH/>
      <ProductList/>
    </div>
  )
}
