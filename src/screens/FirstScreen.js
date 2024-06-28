import styles from "./FirstScreen.module.css"
import gallips from "../images/גל פיגמנט שפתיים.png"

const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled? styles.backgroundP : styles.background}>
<div className={styles.description}>הפתרון האולטימטיבי לשפתיים יפות, מעוצבות, מלאות צבע וללא התאמצות יומיומית</div>
<div className={styles.title}>איפור קבוע לפיגמנט שפתיים</div>
<div className={styles.center}><img className={styles.image} src={gallips} alt="גל יאקובצאק פיגמנט שפתיים"/></div>
<div className={styles.description}>אבל רגע לפני שנעמיק..</div>
<div className={styles.title}>מה זה איפור קבוע לפיגמנט שפתיים?</div>
<div className={styles.description} style={{paddingBottom:"1%"}}>איפור קבוע לפיגמנט שפתיים הוא תהליך שבו מוחדר פיגמנט צבע לתוך השכבות העליונות של עור השפתיים. המטרה היא להעניק לשפתיים מראה טבעי, צבעוני ומלא יותר, ללא צורך בשימוש יומיומי בשפתון.</div>
</div>
</>


}
export default FirstScreen