import { Row, Col, List, Card } from "antd";

const Section2 = () => {
  const data = [
    "Kinding, Bahnhof",
    "Beilngries, Ringstrasse",
    "Beilngries, Frauenkirche",
    "Beilngries, Deutscher Hof",
    "⁠⁠Beilngries, Einstaetter",
  ];

  return (
    <div className="dashboard section2">
      <Row justify="space-between">
        <Col span={13}>
          <iframe src="https://html-heatmap.vercel.app/" />
        </Col>
        <Col span={10}>
          <Card
            title={"List of most demanded Bus Stops"}
            bordered={true}
            className="card"
          >
            <List
              size="small"
            //   bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
