import styles from "./Header.module.css"

export default function Header(){
    return (
        <header className={styles.Header}>
            
            {/* Sticky navbar at top */}
            <nav className={styles.NavBar}>
                <div className={styles.container}>
                    <span className={styles.Logo}>SentryFlow</span>
                    <button className={styles.SignupButton}>Sign Up</button>
                </div>
            </nav>

            {/* Hero section below navbar */}
            <div className={styles.Hero}>
                    <h1>
                        Welcome to <span className={styles.Brandname}>SentryFlow</span>
                    </h1>
                    
                    <button className={styles.LoginButton}>Login</button>
                </div>
        </header>
    );
}