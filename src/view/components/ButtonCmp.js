const ButtonCmp = (props) => {
  return (
    <button onClick={props.cb} class={props.className}>
      {props.text}
    </button>
  );
};

export default ButtonCmp;
