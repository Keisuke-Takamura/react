var React = require('react');
var ReactDOM = require('react-dom');

var HelloReact = React.createClass({
	render: function () {
		return (
			<div>
				Hello React!!
			</div>
		);
	}
});

ReactDOM.render(
	<HelloReact />,
	document.querySelector(".content")
);