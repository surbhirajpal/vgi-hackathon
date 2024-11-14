import {
  graph1Data,
  graph1Options,
  graph2Data,
  graph2Options,
} from "./graphData";
import { Row, Col, List, Card } from "antd";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Section3 = () => {
  return (
    <div className="dashboard section3">
      <Row>
        <Col span={13}>
          <Line data={graph1Data} options={graph1Options} />
        </Col>
        <Col span={10}>
          <div style={{ position: "relative", height: "100%" }}>
            <Line data={graph2Data} options={graph2Options} height={null} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section3;