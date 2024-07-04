import styles from "./ThirdScreen.module.css"
import gal from "../images/גל יאקובצאק.png"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react";
import nails from "../Icons/wired-lineal-1596-nails.json"
import lips from "../Icons/wired-lineal-1597-lips (1).json"
import ScrollReveal from "scrollreveal";
const ThirdScreen=()=>{

    const playerRef1=useRef(null);
    const playerRef2=useRef(null);
    const handleComplete1 = () => {
      setTimeout(() => {
        playerRef1?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    };
    const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
        playerRef2?.current?.playFromBeginning();
      },[])
  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 1000,
      distance: "30px",
      origin: "top", // Start from the right side
      easing: "ease-out",
      reset:false,
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "30px",
      origin: "top", // Start from the right side
      easing: "ease-out",
      reset:false,
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
    ScrollReveal().reveal(`.${styles.description}`, {
      duration: 1000,
      distance: "30px",
      origin: "top", // Start from the right side
      easing: "ease-out",
      reset:false,
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
  },[])

    return <> 
    <div className={styles.intro} id="מי אני">זמן להכיר...</div>
    <div className={styles.container}>
   
    <h1 className={styles.title}>גל יאקובצאק</h1>
    <div className={styles.circle}><img className={styles.image} alt="גל יאקובצאק" src={gal}/></div>
    <div className={styles.subTitle}>מומחית ביוטי ואיפור קבוע לפיגמנט שפתיים</div>
    <div className={styles.description}>במהלך השנים האחרונות כל מה שאני עושה מהבוקר עד הערב הוא להוציא אתכן יפות מהקליניקה שלי!</div>
    <div className={styles.description}>אני מתמחה בשני תחומים עיקריים</div>
    <div className={styles.row}>

        <div className={styles.column}>
    <div className={styles.icon}>
      <Player icon={lips} ref={playerRef1} size="95%" loop={true} onComplete={handleComplete1}></Player>
      </div>
      <div className={styles.description}>פיגמנט שפתיים</div>
      </div>
      <div className={styles.column}>
      <div className={styles.icon} >
      <Player icon={nails} ref={playerRef2} size="95%" loop={true} onComplete={handleComplete2}></Player>
      </div>
      <div className={styles.description}>לק ג'ל וציפורניים</div>
      </div>
    </div>
    </div>
    </>

}
export default ThirdScreen