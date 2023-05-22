import "./Button.scss";
import { ButtonProps } from "../../Types/ButtonTypes";

const Button = ({children, style, onClick}: ButtonProps) => {
 return (
    <button className="Button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;