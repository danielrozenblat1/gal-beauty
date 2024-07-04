import styles from "./ForthScreen.module.css"
import gallips from "../images/גל פיגמנט שפתיים.png"
import mirror from "../Icons/wired-gradient-1589-makeup-mirror.json"
import lipstick from "../Icons/wired-gradient-1559-lipstick.json"
import eat from "../Icons/wired-gradient-1739-dining-room (1).json"
import Button from "../components/button/Button"
import Box from "../components/box/Box"

const ForthScreen=()=>{


    return <>
    <div className={styles.title}>כמה פעמים יצא לך..</div>
    <div className={styles.row}>
    <Box title=" לראות שפתיים חיוורות במראה" description="להביט במראה בבוקר ולהרגיש שאת חייבת להוסיף קצת צבע כי משהו חסר ולחפש למרוח אודם על השפתיים כי בלעדיו אני מרגישה קצת יותר חסרת בטחון" icon={mirror}/>
    <Box title="להרגיש תלויה באודם" description="לדאוג שתמיד היהי לך אודם בהישג יד, לתקן אותו במהלך היום/ לקנות לקנות אודם לא איכותי שמתקלף ומשאיר סימנים" icon={lipstick}/>
 
    </div>
   <div className={styles.description}>גם אני הייתי שם!</div>
    <div className={styles.description}>הרגשתי בדיוק ככה והחלטתי לשים לזה סוף!</div>
    <div className={styles.description}>ההרגשה שאת מטופחת 24/7 גם אחרי אוכל/יום עבודה עמוס מאוד, לקום בבוקר ולדעת שהשפתיים שלך מושלמות <div className={styles.bold}>ואין צורך לגעת בהן! להביט במראה ופשוט לחייך! שווה הכל!</div></div>

    </>


 }
 export default ForthScreen
