import styles from "../button/Button.module.css"
const Button=(props)=>{
    const handleClick = () => {
        const phoneNumber = "+972525878004";
        // Set the message content
        const message ="היי גל ,אני רוצה לשמוע ממך עוד על..";
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        // Construct the WhatsApp message URL with phone number and message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        // Open the URL in a new tab
        window.open(whatsappURL, "_blank");
    
      };

return <>
<button className={styles.button} onClick={handleClick}>
    <span className={styles.span}>{props.text}</span>
</button>
</>


}
export default Button