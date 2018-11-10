const BottomButton = ({ text, onClick, disabled }) => (
  <button
    style={{ backgroundColor: disabled ? "#ccc" : "#10652E" }}
    onClick={disabled ? null : onClick}
    disabled={disabled}
  >
    {text}
    <style jsx>{`
      button {
        float: left;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 20px;
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
    `}</style>
  </button>
);

export default BottomButton;
