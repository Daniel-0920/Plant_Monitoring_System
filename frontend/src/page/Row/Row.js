import { useNavigate, Outlet, Link } from "react-router-dom"
import styles from "./Row.module.css"

export const Row = () => {
    const navigate = useNavigate()
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
                    <button className={styles.button} onClick={() => navigate('tree')}>Row A</button>
                    <button className={styles.button} onClick={() => navigate('tree')}>Row B</button>
                    <button className={styles.button} onClick={() => navigate('tree')}>Row C</button>
                    <button className={styles.button} onClick={() => navigate('tree')}>Row D</button>
                    <button className={styles.button} onClick={() => navigate('tree')}>Row E</button>


                </div>
            </div>
            

        </>
    )


}