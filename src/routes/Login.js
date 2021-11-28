import backgroundImg from '../image/login.jpg';
import logo from '../image/logo.JPG';
import styles from "./css/Login.module.css";
import { Link } from "react-router-dom";

function Login(){

    return(
        <div>
            <img src={backgroundImg} className={styles.bgImg} alt="background"/>

            <div className={styles.loginBox}>
                <img src={logo} className={styles.login__logo} alt="logo"/>
                <form method="post" className={styles.loginBox__loginForm}>
                    <div className={styles.loginBox__IDPW}>
                        <input name="username" type="text" placeholder="아이디 입력"/>
                        <input name="password" type="password" placeholder="비밀번호 입력"/>
                    </div>
                    <div className={styles.loginBox__loginOption}>
                        <div className={styles.loginBox__loginOption_auto}>
                            <input type="checkbox" name="auto-login" checked/>
                            <label for="auto-login">자동 로그인</label>  
                        </div>          
                        <input  type="submit" value="로그인"/>
                    </div>
                    <Link to={`/`} className={styles.loginBox__lostIDPW} > {'>> 아이디 비밀번호를 잊어버렸어요'}</Link>

                </form>
            </div>

        </div>
    );

}

export default Login;