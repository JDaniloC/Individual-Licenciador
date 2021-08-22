import { useContext } from 'react';
import { HeaderContext } from '../contexts/Header.context';
import { RouterContext} from '../contexts/Router.context';
import styles from '../styles/components/Header.module.css';

export default function Header() {
    const { changeDisplay, setCanBack, 
        licenses, canBack } = useContext(HeaderContext);
    const { setRoute } = useContext(RouterContext);

    function closeAccount() {
        localStorage.removeItem('account');
        localStorage.removeItem('bot');
        setRoute("login");
        changeDisplay("flex");
    }
    
    return (
        <header className = {styles.header}>
            <button onClick = {() => {setRoute("botList"); setCanBack(false) }} disabled = {!canBack}
                style = {{ opacity: (canBack) ? 1 : 0 }}>
                <img src="https://img.icons8.com/clouds/344/back.png" alt="back Img"/>
            </button>
            <h1> Licenciador </h1>
            <div>
                <p id = "licenseNumber"> {licenses} </p>
                <img src="https://i.pinimg.com/originals/c1/2d/c5/c12dc536b8f8797b629eb9942a2dbbf1.gif"/>
            </div>
            <button style = {{ opacity: 1 }} onClick = {closeAccount}>
                <img src="https://i.ibb.co/dkd6LYY/shutdown.png" alt="exit image"/>
            </button>
        </header>
    )
}