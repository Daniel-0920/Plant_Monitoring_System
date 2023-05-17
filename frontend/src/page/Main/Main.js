import { useNavigate } from "react-router-dom"
import styles from "./Main.module.css"
import Header from "../../components/Header/Header"

export const Main = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.container}>
                <div className={styles.SectionBox}>
                    <div className={styles.SectionInformation}>
                        <div className={styles.TotalBlock}>
                            <span >4</span>
                            <span>Total Block</span>
                        </div>
                        <div className={styles.TotalCrop}>
                            <span>4</span>
                            <span>Total Crop</span>
                        </div>
                    </div>
                    <div className={styles.SectionButtons}>
                        <button className={styles.button} onClick={() => navigate('row')}>Section A</button>
                        <button className={styles.button} onClick={() => navigate('row')}>Section B</button>
                        <button className={styles.button} onClick={() => navigate('row')}>Section C</button>
                        <button className={styles.button} onClick={() => navigate('row')}>Section D</button>
                        <button className={styles.button} onClick={() => navigate('row')}>Section E</button>
                    </div>
                </div>
                <div className={styles.MapBox}>
                    <p>Will be replaced by map</p>

                </div>
            </div>

        </>
    )

}