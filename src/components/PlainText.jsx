const PlainText = ({ top = 0, left = 0, text = "" }) => {
  return (
    <div
      className="absolute text-lg font-medium"
      style={{
        width:"150px",
        left,
        top,
      }}
    >
      {text}
    </div>
  );
};

export default PlainText;
