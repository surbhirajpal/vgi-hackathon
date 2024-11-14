import { useState, useEffect } from "react";

import CustomConfigProvider from "../../components/ConfigProvider";
import { Radio, Row, Col, Collapse, Button, ConfigProvider } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { ListData, ListDataPrediction } from "./data";
import {
  graph1Data,
  graph1Options,
  graph2Data,
  graph2Options,
  graph3Data,
  graph3Options,
  graph1DataCity2,
  graph1OptionsCity2,
  graph2DataCity2,
  graph2OptionsCity2,
  graph3DataCity2,
  graph3OptionsCity2,
} from "./graphData";
import "./Analysis.scss";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const color1 = "#AB31FF";
const color2 = "#08A3FC";

// const color1 = "#057ECD";
// const color2 = "#BBCF00";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, ${color1}, ${color2});
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const ListLabel = ({ list, id }) => {
  const data = list[id];
  return (
    <div className="list-label">
      <p>{data.name}</p>
      <p>{data.trips}</p>
      <p>{data.stopTime}</p>
      <p>{data.delayTime}</p>
      <p>{data.delayPercentage}</p>
    </div>
  );
};

const ListChildren = ({ list, id }) => {
  const data = list[id].children;

  return (
    <div className="list-children flex">
      <div className="list-card">
        <p className="list-card-title">{data.avgPassenger}</p>
        <p className="list-card-subtitle">{"Avg. Passenger"}</p>
      </div>
      <div className="list-card">
        <p className="list-card-title">{data.avgCancellation}</p>
        <p className="list-card-subtitle">{"Avg. Cancellation"}</p>
      </div>
      <div className="list-card">
        <p className="list-card-title">{data.avgDelayTime}</p>
        <p className="list-card-subtitle">{"Avg. Delay Time"}</p>
      </div>
      <div className="list-card">
        <p className="list-card-title">{data.confidence}</p>
        <p className="list-card-subtitle">{"Confidence"}</p>
      </div>
    </div>
  );
};

const Analysis = () => {
  const options = [
    { label: "Station", value: "Station" },
    { label: "Route", value: "Route" },
  ];

  const { styles } = useStyle();

  const [optionValue, setOptionValue] = useState("Station");
  const [activeKey, setActiveKey] = useState(["1"]);
  const [predictionTrue, setPredictionTrue] = useState(false);
  const [listItems, setListItems] = useState([]);

  const onOptionChange = ({ target: { value } }) => {
    setOptionValue(value);
  };

  const handlePredictionClick = () => {
    setPredictionTrue(!predictionTrue);
  };

  useEffect(() => {
    if (predictionTrue) {
      console.log("true");
      const list = ListData.map((item, index) => ({
        key: `${index + 1}`, // Generate a unique key based on the index
        label: <ListLabel list={ListData} id={index} />, // Pass the index+1 as the id prop
        children: <ListChildren list={ListData} id={index} />,
      }));
      setListItems(list);
    } else {
      console.log("false");
      const list = ListDataPrediction.map((item, index) => ({
        key: `${index + 1}`, // Generate a unique key based on the index
        label: <ListLabel list={ListDataPrediction} id={index} />, // Pass the index+1 as the id prop
        children: <ListChildren list={ListDataPrediction} id={index} />,
      }));
      setListItems(list);
    }
  }, [predictionTrue]);

  return (
    // <div className='container'>
    // </div>
    <div className="container analysis">
      <div className="flex heading">
        <p className="title">{"Analysis"}</p>
        <div className="prediction">
          <ConfigProvider
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Button
              size="middle"
              type="primary"
              size="large"
              icon={<AntDesignOutlined />}
              onClick={handlePredictionClick}
            >
              Predict Demand
            </Button>
          </ConfigProvider>
        </div>
      </div>
      <div className={predictionTrue ? "gradient-border" : "no-gradient"}>
        <Row justify="space-between" className="content">
          <Col span={11}>
            <div className="flex">
              <CustomConfigProvider>
                <Radio.Group
                  options={options}
                  onChange={onOptionChange}
                  defaultValue={optionValue}
                  optionType="button"
                  buttonStyle="solid"
                />
              </CustomConfigProvider>
            </div>

            <div className="list">
              <div className="flex list-heading">
                <p>{"Station Name"}</p>
                <p>{"No. of Trips"}</p>
                <p>{"Stoppage Time"}</p>
                <p>{"Delay Time"}</p>
                <p>{"Delay %"}</p>
              </div>
            </div>
            <Collapse
              accordion
              items={listItems}
              activeKey={activeKey}
              onChange={(key) => setActiveKey(key)}
            />
          </Col>
          <Col span={12}>
            <iframe src="https://html-heatmap.vercel.app/" />
          </Col>
        </Row>
      </div>

      <div className="section2">
        <Row justify={"space-between"}>
          <Col span={7}>
            <div style={{ position: "relative", height: "300px" }}>
              <Bar
                data={
                  activeKey && activeKey[0] === "1"
                    ? graph1Data
                    : graph1DataCity2
                }
                options={
                  activeKey && activeKey[0] === "1"
                    ? graph1Options
                    : graph1OptionsCity2
                }
                height={null}
              />
            </div>
          </Col>
          <Col span={7}>
            <div style={{ position: "relative", height: "300px" }}>
              <Bar
                data={
                  activeKey && activeKey[0] === "1"
                    ? graph2Data
                    : graph2DataCity2
                }
                options={
                  activeKey && activeKey[0] === "1"
                    ? graph2Options
                    : graph2OptionsCity2
                }
                heigh={null}
              />
            </div>
          </Col>
          <Col span={7}>
            <div style={{ position: "relative", height: "300px" }}>
              <Bar
                data={
                  activeKey && activeKey[0] === "1"
                    ? graph3Data
                    : graph3DataCity2
                }
                options={
                  activeKey && activeKey[0] === "1"
                    ? graph3OptionsCity2
                    : graph3DataCity2
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Analysis;
