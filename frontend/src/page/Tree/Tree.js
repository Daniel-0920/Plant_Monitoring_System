import { useNavigate } from "react-router-dom"
import styles from "./Tree.module.css"

export const Tree = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/fruits');
      };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.TreeTitle}>
                        <span>Tree A</span>
                    </div>
                    <div className={styles.NumOfTree}>
                        <span>Number Of tree : 5</span>
                    </div>
                </div>
                <div className={styles.FruitView}>
                <button className={styles.button} onClick={handleButtonClick}>Tree A</button>
                <button className={styles.button} onClick={handleButtonClick}>Tree B</button>
                <button className={styles.button} onClick={handleButtonClick}>Tree C</button>
                <button className={styles.button} onClick={handleButtonClick}>Tree D</button>
                <button className={styles.button} onClick={handleButtonClick}>Tree E</button>
                </div>
            </div>

        </>
    )





}