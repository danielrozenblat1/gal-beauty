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
    <Box title="לתקן את האודם אחרי האוכל" description="להזהר באוכל שהאודם לא ימרח וייהרס לך , ובסוף הוא תמיד נהרס ואת תמיד מתקנת אותו אחרי האוכל..." icon={eat}/>
    <Box title="להלחץ שעומד להגמר לך האודם" description="גם אני הרגשתי תלוייה באודם שלי ובכל פעם שאני רואה את הסוף של האודם מתקרב, רצתי לקנות חדש כי מה אני אעשה אם הוא ייגמר לי ולא יהיה עוד אודם?" icon={lipstick}/>
    </div>
   <div className={styles.description}>גם אני הייתי שם!</div>
    <div className={styles.description}>הרגשתי בדיוק ככה והחלטתי לשים לזה סוף!</div>
    <div className={styles.description}>ההרגשה שאת יכולה לאכול ברוגע , לקום בבוקר ולדעת שהשפתיים שלך מושלמות ואין צורך לגעת בהן ולהביט במראה ופשוט לחייך! שווה הכל!</div>

    </>


 }
 export default ForthScreen
