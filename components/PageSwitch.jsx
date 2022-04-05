import styles from "../styles/pageSwitch.module.css";

export default function PageSwitch(props) {
  return (
    <div className={styles.switchContainer}>
      {props.left ? (
        <div className={styles.box} style={{ background: props.color }}>
          <a href={`/${props.left.toLowerCase()}`}>&larr; {props.left}</a>
        </div>
      ) : (
        <div></div>
      )}
      {props.right ? (
        <div className={styles.box} style={{ background: props.color }}>
          <a href={`/${props.right.toLowerCase()}`}>{props.right} &rarr;</a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
