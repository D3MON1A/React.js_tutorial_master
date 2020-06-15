import React from "react";
import ReactDOM from "react-dom";

const Alert = function(props) {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>
	);
};

ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
