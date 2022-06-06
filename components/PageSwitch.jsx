export default function PageSwitch(props) {
  return (
    <div className="max-w-4xl p-8-4 flex inset-1  justify-between">
      {props.left ? (
        <div
          className="rounded-xl text-white block p-2 rotate-scale shadow-xl"
          style={{ background: props.color }}
        >
          <a href={`/${props.left.toLowerCase()}`}>&larr; {props.left}</a>
        </div>
      ) : (
        <div></div>
      )}
      {props.right ? (
        <div
          className="rounded-xl text-white block p-2 rotate-scale shadow-xl"
          style={{ background: props.color }}
        >
          <a href={`/${props.right.toLowerCase()}`}>{props.right} &rarr;</a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
