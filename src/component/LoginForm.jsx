import styles from "./LoginForm.module.css"
import { useGoogleLogin } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc' 
{/*import { FaFacebook } from "react-icons/fa"*/}

export default function LoginForm(){
    const googleLogin = useGoogleLogin({
    onSuccess: (response) => console.log('Login success:', response),
    onError: () => console.log('Login failed')
  })
    return(
        <>
        {/* Hero section below navbar */}
            <div className={styles.Hero}>
                <h1 className={styles.WelcomeM}>
                    Welcome to <span className={styles.Brandname}>SentryFlow</span>
                </h1>
                    
                <div className={styles.LoginGlass}>
                    <div className={styles.Email}>
                        <p className={styles.Logintxt}>Email Address</p>
                        <input type="email" placeholder="Email Address" className={styles.Logininput}/>
                    </div>

                    <div className={styles.Password}>
                        <p className={styles.Logintxt}>Password</p>
                        <input type="password" placeholder="Password" className={styles.Logininput} />
                        <button className={styles.FPassword}>Forgot Password?</button>
                    </div>
                        
                    <button className={styles.LoginButton}>Login</button>

                    <div className={styles.Divider}>
                        <span>or continue with</span>
                    </div>

                    <div className={styles.SocialButton}>
                        <div>
                            <button className={styles.GoogleButton} onClick={() => googleLogin()}>
                                <FcGoogle size={55}/>
                            </button>
                            
                        </div>

                        <button className={styles.FbButton}>
                            {/*<FaFacebook size={20} color="#1877F2"/>*/}
                            <span>Facebook</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}