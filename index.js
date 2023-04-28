const Notification = (props) => {
  const { message, className } = props;
  return <p className={`${className}`}>{message}</p>;
};

const element = (
  <div className="body">
    <h1 className="heading">Notifications</h1>
    <div className="informationCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="logo"
      />
      <Notification message="Information Message" className="messageHeading" />
    </div>

    <div className="successCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="logo"
      />
      <Notification message="Success Message" className="messageHeading" />
    </div>

    <div className="warningCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="logo"
      />
      <Notification message="Warning Message" className="messageHeading" />
    </div>

    <div className="errorCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="logo"
      />
      <Notification message="Error Message" className="messageHeading" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
