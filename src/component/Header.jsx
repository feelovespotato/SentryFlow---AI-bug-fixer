import styles from "./Header.module.css"
import logo from "../assets/logo-dark.png" 

export default function Header(){
    return (
        <header className={styles.Header}>
            
            {/* Sticky navbar at top */}
            <nav className={styles.NavBar}>
                <div className={styles.container}>
                    <img src={logo} alt="SentryFlow" className ={styles.Logo}/>
                    <button className={styles.SignupButton}>Sign Up</button>
                </div>
            </nav>

        
        </header>
    );
}