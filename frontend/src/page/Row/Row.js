import { useNavigate, Outlet, Link } from "react-router-dom"
import styles from "./Row.module.css"

export const Row = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/row/tree');
      };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.SectionTitle}>
                        <span>Section A</span>
                    </div>
                    <div className={styles.NumOfTree}>
                        <span>Number Of tree : 5</span>
                    </div>
                </div>
                <div className={styles.TreeView}>
                    <button className={styles.button} onClick={handleButtonClick}>Row A</button>
                    <button className={styles.button} onClick={handleButtonClick}>Row B</button>
                    <button className={styles.button} onClick={handleButtonClick}>Row C</button>
                    <button className={styles.button} onClick={handleButtonClick}>Row D</button>
                    <button className={styles.button} onClick={handleButtonClick}>Row E</button>
                </div>
            </div>
            

        </>
    )


}