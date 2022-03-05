import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import styles from '../css/mycssmodule.module.css'
import Header from './Header';
import Footer from './Footer';

export default function GetProduct() {
    const { id } = useParams()
    console.log(id)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(
                (items) => {
                    // console.log(items)
                    setIsLoaded(true);
                    setItems(items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div >
                <Header />
                <div className={styles.productBox} style={{ height: "60vh" }}>
                    <div><img className={styles.imageBox} src={items.image} alt='oops' /></div>
                    <div className={styles.productData}>
                        <div className={styles.productTitle}>
                            {items.title}
                        </div>
                        <div className={styles.productDes}>
                            {items.description}
                        </div>
                        <div className={styles.productPrice}>
                            <span className={styles.price}>Price:</span>
                            <div className={styles.mydollar}>
                                <img className={styles.dollar} src="https://img.icons8.com/ios-glyphs/30/000000/us-dollar-circled--v1.png" /> {items.price}
                            </div>
                        </div>
                        <div className={styles.shop}>
                            <button className={styles.shopNow}>Shop Now</button>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/like--v2.png" />
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/favorite-cart.png" />
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
