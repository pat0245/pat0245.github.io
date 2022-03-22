import styles from "../styles/box.module.css"

export default function Box(props) {
    
return (
  <div className={styles.box}>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
  </div>
);
}