import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = props => {
    return(
        <div className={styles.errorPageContainer}>
            <h1 className={styles.errorPageTitle}>This Page Doesn't Exist!</h1>
            <p className={styles.errorPageText}>Please go back to our home page and navigate to your desired pages from there!</p>
        </div>
    )
}

export default ErrorPage;