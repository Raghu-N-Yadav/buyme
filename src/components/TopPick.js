import React from "react";
import styles from '../css/mycssmodule.module.css'
import heart from '../img/heart.gif'


export default class TopPick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`https://fakestoreapi.com/products/${this.props.pro}`)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)


                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    // console.log(typeof this.state.items)

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded } = this.state;
        const { image, title, price, description } = this.state.items;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={styles.heart}><img src={heart} alt="loading.." /></div>;
        } else {
            return (
                <div className={styles.pickUpBox}>
                    <div className={styles.topPic}>
                        <div><img className={styles.topImg} src={image} alt='oops' /></div>

                        <div className={styles.topProductData}>
                            <div className={styles.productTitle}>
                                {title.split(' ').slice(0, 2)}
                            </div>
                            {/* <div className={styles.productDes}>
                                {description}
                            </div> */}
                            <div className={styles.productPrice}>
                                {/* <span className={styles.price}>Price:</span> */}
                                <div className={styles.mydollar}>
                                    <img className={styles.dollar} src="https://img.icons8.com/ios-glyphs/30/000000/us-dollar-circled--v1.png" alt="dollar" /> {price}
                                </div>
                            </div>
                        </div>

                        {/* {this.state.items.map(cat => <div>{this.makeCategoryComp(cat)}</div>)} */}
                    </div>
                </div>
            );
        }
    }
}