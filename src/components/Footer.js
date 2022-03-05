import React from "react";
import styles from '../css/mycssmodule.module.css'
import fb from '../img/fb.png'
import twitter from '../img/twitter.png'
import insta from '../img/insta.png'
import youtube from '../img/youtube.png'

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.mainFooter}>
                <div className={styles.footer1}>
                    <div className={styles.footer19}>
                        <div className={styles.mainTitle}>
                            <div className={styles.logo}><img id={styles.logo} src="https://img.icons8.com/clouds/100/000000/r--v1.png" alt="logo" /></div>
                            <div className={styles.title}>are</div>
                        </div>
                        <div className={styles.footer10}>
                            <span>Shop</span>
                            <span>Blog</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className={styles.footer11}>
                        <span>SUBSCRIBE</span>
                        <input id={styles.inputS} type="email" placeholder="Your email here"></input>
                    </div>
                </div>
                <div className={styles.footer2}>
                    <div className={styles.footer22}>
                        <span>Order Status</span>
                        <span>Shipping and Delivery</span>
                        <span>Privacy Policy</span>
                    </div>
                    <div className={styles.footer12}>
                        <img src={fb} alt="fb" />
                        <img src={insta} alt="insta" />
                        <img src={youtube} alt="insta" />
                        <img src={twitter} alt="insta" />

                    </div>
                </div>
                <div className={styles.footer3}>
                    <span>Payment Options</span>
                    <span>Guides</span>
                    <span>Terms of Use</span>
                </div>
            </div>
        )
    }
}