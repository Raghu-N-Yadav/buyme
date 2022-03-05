import React from 'react'
import styles from '../css/mycssmodule.module.css'
import heart from '../img/heart.gif'


export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.newV(result)
                    // console.log(this.props.newV(result))
                    // console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={styles.heart}><img src={heart} alt="loading.." /></div>;
        } else {
            return (
                <div className={styles.pickUpBox}>
                    <div className={styles.newArr}>New Arrival</div>
                    <div className={styles.topPic}>
                        <div><img className={styles.topImg} src={items.image} alt='oops' /></div>

                        <div className={styles.topProductData}>
                            <div className={styles.productTitle}>
                                {items.title}
                            </div>
                            {/* <div className={styles.productDes}>
                                {description}
                            </div> */}
                            <div className={styles.productPrice}>
                                {/* <span className={styles.price}>Price:</span> */}
                                <div className={styles.mydollar}>
                                    <img className={styles.dollar} src="https://img.icons8.com/ios-glyphs/30/000000/us-dollar-circled--v1.png" alt="dollar" /> {items.price}
                                </div>
                            </div>
                        </div>

                        {/* {this.state.items.map(cat => <div>{this.makeCategoryComp(cat)}</div>)} */}
                    </div>
                </div>)
        }
    }
}
