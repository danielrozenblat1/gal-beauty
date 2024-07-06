import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(to left, #ffb6c1, #ff69b4)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

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
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">שאלות נפוצות</div>
      <DropdownAccordion title="כמה זמן מחזיק הפיגמנט שפתיים?" content="הפיגמנט נשמר בין שנה לשלוש שנים בממוצע" />
      <DropdownAccordion title="למי הטיפול לא מתאים?" content="הטיפול לא מתאים למי שבהריון, למי שמניקה,למי שיש סכרת למאוזנת ולמי שמשתמשת במדללי דם" />
      <DropdownAccordion title="איך עובד תהליך ההחלמה? " content="בסיום הטיפול יתכן ותהיה נפיחות ורגישות בשפתיים, בימים הראשונים לאחר הטיפול העור בשפתיים יתייבש ויתחיל להתקלף,מתחת לקילוף הגוון יתחיל לצוץ ואחרי חודש וחצי בבמוצע התוצאה הסופית מתחילה להתקבל" />
      <DropdownAccordion title="האם הטיפול כואב?" content={<>
      <div className={styles.description}>יש שחושבות שהטיפול כואב כמו טיפול של קעקוע קבוע <div className={styles.bold}>אבל יש גם הבדלים משמעותיים </div></div>
      <br/>
      1.המחט חודרת לשכבה הראשונה של העור בניגוד לקעקוע שחודר לשכבה השלישית  <br/>
2. המחט של פיגמנט השפתיים הרבה יותר דקה מהמחט ועדינה <br/>
3. אני משתמשת במאלחש מיוחד בזמן הטיפול <br/>
ואת תאמיני לי אם אני אגיד לך שיש לי לקוחות שאפילו <div className={styles.bold}>נרדמו</div> בזמן הטיפול? <br/>
יש אזורים שכן יותר כואבים כמו קשת הקופידון אבל חשוב לזכור שאני עוברת על האזור רק למשך כמה דקות <br/>
הכאב הוא אינדיבידואלי בין כל אחת ורוב הבנות מתארות שתחושת הטיפול היא מעין חום ושריטות קטנות על העור
      </> }/>
     
    </div>
  
  );
}
