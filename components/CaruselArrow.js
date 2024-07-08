import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",
        margin: "auto",
        padding: "15px",
        zIndex: "10000",
        color: "#ff1749",
        background: "#e1e1e1",
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
}
export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",
        margin: "auto",
        marginLeft: "20px",
        padding: "15px",
        zIndex: "10000",
        color: "#ff1749",
        background: "#e1e1e1",
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
}
