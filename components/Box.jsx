export default function Box(props) {
  return (
    <div className="rounded-xl p-4 m-4 rotate-scale shadow-xl" style={{ background: props.color }}>
      <h1 className="font-bold text-xl">{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}
