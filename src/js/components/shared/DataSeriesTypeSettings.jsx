var React = require("react");
var PropTypes = React.PropTypes;
var chartbuilderUI = require("chartbuilder-ui");
var ButtonGroup = chartbuilderUI.ButtonGroup;

var dataTypeOptions = [
	{ title: "Data", content: "Data", value: "date" },
	{ title: "Nome", content: "Nome", value: "ordinal" },
	{ title: "Número", content: "Número", value: "numeric" }
];


var DataSeriesTypeSettings = React.createClass({
	propTypes: {
		onUpdate: PropTypes.func,
		chartProps: PropTypes.object
	},

	_handleSeriesTypeUpdate: function(ix,k,v) {
		var chartProps = this.props.chartProps;
		chartProps.input.type = v;
		this.props.onUpdate(chartProps.input);
	},

	render: function() {
		var chartProps = this.props.chartProps;
		return (
			<div className="section datatypesection">
					<h3>Sua primeira coluna é</h3>
					<ButtonGroup
						className="button-group-wrapper"
						onClick={this._handleSeriesTypeUpdate.bind(null, this.props.chartProps, "dataType")}
						buttons={dataTypeOptions}
						value={
							chartProps.input.type ? chartProps.input.type : (
							chartProps.scale.hasDate ? "date" : (
							chartProps.scale.isNumeric ? "numeric" :
								"ordinal"
							))
						}
					/>
				</div>
			)
	}
});

module.exports = DataSeriesTypeSettings;
