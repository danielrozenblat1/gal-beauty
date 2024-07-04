import styles from "./FirstScreen.module.css"
import gallips from "../images/גל ביוטי מיקס 1.png"
import Box2 from "../components/boxclean/Box2"
import pen from "../Icons/wired-gradient-35-edit.json"
import lips from "../Icons/wired-gradient-1597-lips.json"
import plus from "../Icons/wired-gradient-2158-plus-math.json"
import equal from "../Icons/wired-outline-2150-equal-sign.json"
import happy from "../Icons/wired-outline-1584-smiling-mouth.json"
const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled? styles.backgroundP : styles.background}>
<div className={styles.description}>הפתרון <div className={styles.bold}>האולטימטיבי</div> לשפתיים יפות, מעוצבות, מלאות צבע וללא התאמצות יומיומית</div>
<div className={styles.title}>איפור קבוע לפיגמנט שפתיים</div>
<div className={styles.center}><img className={styles.image} src={gallips} alt="גל יאקובצאק פיגמנט שפתיים"/></div>
<div className={styles.description}>אבל רגע לפני שנעמיק..</div>
<div className={styles.title}>מה זה איפור קבוע לפיגמנט שפתיים?</div>
{window.innerWidth>1200&&<div className={styles.row}>
    <Box2 icon={pen} title="" description="טיפול המבוצע בעזרת מכונה הדומה לעט ובקצה יש מחט , המחט חודרת את השכבה העליונה של השפה וכך חודרים המיקרו פיגמנטים לתוך השפה"/>
    <Box2 icon={plus} title="" description=""/>
    <Box2 icon={lips} title="" description="הוספת גוון לשפתיים חיוורות - ניתן לתקן אסימטרייה,לטשטש צלקות, להגדיר את גבולת השפה מחדש"/>
</div>}
{window.innerWidth<1200&&<Box2 icon={pen} title="" description="טיפול המבוצע בעזרת מכונה הדומה לעט ובקצה יש מחט , המחט חודרת את השכבה העליונה של השפה וכך חודרים המיקרו פיגמנטים לתוך השפה"/>}
{window.innerWidth<1200&& <Box2 icon={plus} title="" description=""/>}
{window.innerWidth<1200&&<Box2 icon={lips} title="" description="הוספת גוון לשפתיים חיוורות - ניתן לתקן אסימטרייה,לטשטש צלקות, להגדיר את גבולת השפה מחדש"/>}
<div className={styles.row}>

    <Box2 icon={equal} title="" description=""/>
    </div>
    <div className={styles.row}>

    <Box2 icon={happy} title="" description="שפתיים עסיסיות במראה אודם/טינט ,מלאות יותר במראה עדין יותר וטבעי לאורך כל שעות היום! כי הכי כיף להרגיש יפה כשאת לא מתאמצת"/>
    </div>
</div>
</>


}
export default FirstScreen