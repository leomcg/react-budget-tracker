import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maxValue = dataPointValues.reduce((a, b) => a + b);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
