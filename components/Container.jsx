export default function Container(props) {
  return (
    <section className="container">
      <div className={props.className}>{props.children}</div>
    </section>
  );
}
