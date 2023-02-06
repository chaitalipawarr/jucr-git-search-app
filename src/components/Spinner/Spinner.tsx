import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="loader" data-testid="loader">
      <span className="loader__border"></span>
    </div>
  );
};

export default Spinner;
