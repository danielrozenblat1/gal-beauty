import Line from "../components/pipeline/Line"
import styles from "./SecondScreen.module.css"
import first from "../Icons/wired-gradient-981-consultation.json"
import second from "../Icons/wired-gradient-428-injection.json"
import third from "../Icons/wired-gradient-35-edit.json"
import forth from "../Icons/wired-gradient-1597-lips.json"
import Button from "../components/button/Button"
import galMix from "../images/גל ביוטי מיקס 2.png"
const SecondScreen=()=>{


    return <>
<div className={styles.background} id="תהליך העבודה איתי">
<div className={styles.title}>איך הטיפול מתבצע?</div>
<div className={styles.description}>זה קורה בכמה שלבים פשוטים:</div>
<div className={styles.container}  itemscope itemtype="http://schema.org/WebPage">

<div className={styles.description}>לפני כל השלבים ממלאים טופס הצהרת בריאות 
במידה ואת נוטלת תרופות או בעלת מחלות רפואיות אנא עדכני אותי לפני התהליך.</div>
 <Line side="right" text="בחירת הגוון" icon={first}/>
 <div className={styles["line-divider"]}></div>
  <div className={styles.description}>תיאום ציפיות לגבי הגוון אותו נרצה למלא.
  ניתן לערבב מיקסים של גוונים ולהגיע לגוון שאת הכי אוהבת ומתאים לך</div>
 <div className={styles["line-divider"]}></div>
   <Line side="left" text="סקיצה"  icon={third}/>
   <div className={styles["line-divider"]}></div>
   <div className={styles.description}  itemprop="description">אני משרטטת ומעצבת את גבולות השפה מחדש</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="החדרת הפיגמנט" icon={second} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">לאחר שווידאתי שהשרטוט בוצע בצורה סימטרית וטובה,
        אני מתחילה לעבור על המסגרת החיצונית של השפה על מנת לייצר גבולות שפה ברורים,ולאחר מכן משתמשת במלאחש שיכין את השפתיים לשלב הבא.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="צביעת השפתיים" icon={forth} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">ממלאים את השפתיים בין 2-3 מעברים של פיגמנט בהתאם לאופן שהפיגמנט מתקבל על העור.
        במידה ויש צורך נבצע מעבר נוסף</div>
        <div className={styles.description}>לאחר חודש וחצי מהטיפול הראשון מגיעים לטיפול נוסף במידת הצורך לבצע תיקונים או הדגשת הצבע.</div>
       <div className={styles.center}><img className={styles.image} src={galMix} alt="גל ביוטי לפני אחרי"/></div>
        <div className={styles.center}><Button text="צרי איתי קשר בווצאפ"/></div>
        

      </div>
   
</div>
    </>
}
export default SecondScreen