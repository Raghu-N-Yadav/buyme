import React from "react";
import styles from '../css/mycssmodule.module.css'
import heart from '../img/heart.gif'
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

export default class CatType extends React.Component {

    deleteProduct = ({ id, image, title, description, price, category }) => {
        let obj = {}
        obj['title'] = title
        obj['price'] = price
        obj['description'] = description
        obj['category'] = category
        obj['image'] = image
        obj['id'] = id
        obj['availabe'] = "Out of stock"
        setTimeout(() => {
            let arr = []
            this.props.product.Productreducer.catTypeProduct.items.map(item => {
                if (item.id === Number(id)) {
                    arr.push(obj)
                } else {

                    arr.push(item)
                }
                return null;
            })
            this.props.categoryHandler({
                items: arr,
                isUpdated: false,
                start: false,
                isLoaded: true,
                isDeleted: true
            })

        }, 2000)
    }

    updateProduct = ({ id, image, title, description, price, category }) => {
        let obj = {}
        obj['title'] = title
        obj['price'] = price
        obj['description'] = description
        obj['category'] = category
        obj['image'] = image
        obj['id'] = id
        // console.log(obj)
        setTimeout(() => {
            // console.log(store.getState().catTypeState.items)
            let arr = []
            this.props.product.Productreducer.catTypeProduct.items.map(item => {
                if (item.id === Number(id)) {
                    arr.push(obj)
                } else {

                    arr.push(item)
                }
                return null;
            })
            // console.log(arr)
            this.props.categoryHandler({
                items: arr,
                isUpdated: true,
                start: false,
                isLoaded: true
            })

        }, 2000)
    }

    makeCategoryComp = ({ image, title, price, description, availabe }) => {

        return (
            <div className={styles.productBox}>
                <div><img className={styles.imageBox} src={image} alt='oops' /></div>
                <div className={styles.productData}>
                    <div className={styles.productTitle}>
                        {title}
                    </div>
                    <div className={styles.productDes}>
                        {description}
                    </div>
                    <div className={styles.productPrice}>
                        <span className={styles.price}>Price:</span>
                        <div className={styles.mydollar}>
                            <img className={styles.dollar} src="https://img.icons8.com/ios-glyphs/30/000000/us-dollar-circled--v1.png" alt="price" /> {price}
                        </div>
                    </div>
                    <div className={styles.shop}>
                        <button className={styles.shopNow}>Shop Now</button>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/like--v2.png" alt="like" />
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/favorite-cart.png" alt="cart" />
                    </div>

                    <div className={styles.out}>

                        {this.props.product.Productreducer.catTypeProduct.isDeleted && <div>{availabe}</div>}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props)
        fetch(`https://fakestoreapi.com/products/category/${this.props.type}`)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(store.getState())
                    this.props.categoryHandler({
                        isLoaded: true,
                        items: result,
                        start: true,
                        isDeleted: false,
                        isUpdated: false
                    })

                },
                (error) => {
                    this.props.categoryHandler({
                        error
                    })
                }
            )
    }

    render() {
        // console.log(this.props.product.Productreducer.catTypeProduct)

        const { error, isLoaded, isUpdated, isDeleted, start, items } = this.props.product.Productreducer.catTypeProduct
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={styles.heart}><img src={heart} alt="loading.." /></div>;
        } else {
            return (
                <>
                    {isDeleted && <div className={styles.categories}>

                        {items.map(cat =>

                            <div key={cat.id}>{this.makeCategoryComp(cat)}</div>)}
                    </div>}
                    {isUpdated && <div className={styles.categories}>

                        {items.map(cat =>

                            <div key={cat.id}>{this.makeCategoryComp(cat)}</div>)}

                        <DeleteProduct func={this.deleteProduct} />
                    </div>}

                    {start && <div className={styles.categories}>
                        {items.map(cat => <div key={cat.id}>{this.makeCategoryComp(cat)}</div>)}

                        <UpdateProduct func={this.updateProduct} />
                    </div>}
                </>
            );
        }
    }
}