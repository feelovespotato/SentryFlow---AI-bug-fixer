import styles from "./Header.module.css"

export default function Header(){
    return (
        <header className={styles.header}>
            <h1>
                Welcome to <span className={styles.brandname}>SentryFlow</span>
            </h1>

            <div className={styles.authButtons}>
                <button className={styles.loginButton}>
                    Login
                </button>
                <button className={styles.signupButton}>
                    Sign Up
                </button>
            </div>
        </header>
    );
}