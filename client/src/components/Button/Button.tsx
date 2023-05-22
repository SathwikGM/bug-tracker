import "./Button.scss"

const Button = ({children, style, onClick}) => {
 return (
    <button className="Button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;