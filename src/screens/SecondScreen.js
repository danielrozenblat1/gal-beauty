import Line from "../components/pipeline/Line"
import styles from "./SecondScreen.module.css"
import first from "../Icons/wired-gradient-981-consultation.json"
import second from "../Icons/wired-gradient-428-injection.json"
import third from "../Icons/wired-gradient-1579-foundation-makeup.json"
import forth from "../Icons/wired-gradient-1597-lips.json"
import Button from "../components/button/Button"

const SecondScreen=()=>{


    return <>
<div className={styles.background}>
<div className={styles.title}>ואיך זה קורה גל?</div>
<div className={styles.description}>זה קורה בכמה שלבים פשוטים:</div>
<div className={styles.container}  itemscope itemtype="http://schema.org/WebPage">


 <Line side="right" text="ייעוץ והתאמה" icon={first}/>
 <div className={styles["line-divider"]}></div>
  <div className={styles.description}> תחילה נפגשים איתי לצורך ייעוץ והתאמת גוון הפיגמנט המתאים לגוון העור ולרצונות האישיים שלך</div>
 <div className={styles["line-divider"]}></div>
   <Line side="left" text="הכנה"  icon={second}/>
   <div className={styles["line-divider"]}></div>
   <div className={styles.description}  itemprop="description">מנקים את האזור ומורחים חומר מרדים כדי להקל על תחושת אי הנוחות במהלך הטיפול.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="החדרת הפיגמנט" icon={third} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description">באמצעות מחטים מיוחדות, אני מחדירה את הפיגמנט לשפתיים בתנועות עדינות ומדויקות. התהליך עשוי להימשך כשעה עד שעתיים</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="התאוששות" icon={forth} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}  itemprop="description"> לאחר הטיפול, השפתיים עשויות להיות מעט נפוחות ואדומות, אך זה יחלוף תוך כמה ימים,את תקבלי ממני הוראות להמשך והשפתיים שחלמת עליהן כבר לא יהיו בגדר חלום</div>
      
       
        <div className={styles.center}><Button text="גל, אני רוצה לשמוע ממך עוד"/></div>
        

      </div>
   
</div>
    </>
}
export default SecondScreen