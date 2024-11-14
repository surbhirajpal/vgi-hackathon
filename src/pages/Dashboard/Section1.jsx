import { Row, Col, Card, Carousel } from "antd";

import {
  CaretUpFilled,
  CaretDownFilled,
  CarFilled,
  FundTwoTone,
  ThunderboltTwoTone,
} from "@ant-design/icons";

const Section1 = () => {
  return (
    <div className="dashboard section1">
      <Row justify="space-between">
        <Col span={5}>
          <div className="card">
            <div className="card-heading">
              <div className="card-icon" style={{ backgroundColor: "#e6faff" }}>
                <FundTwoTone twoToneColor={"#077ecd"} />
              </div>
              <p className="card-title">{"Trip Status"}</p>
            </div>

            <div className="flex card-row">
              <p className="card-detail1">{"Validated"}</p>
              <p className="card-detail2">{"80%"}</p>
              <div className="card-detail3 flex">
                <p clas="percentage">{"20%"}</p>
                <CaretUpFilled className="cards-increased" />
              </div>
            </div>

            <div className="flex card-row">
              <p className="card-detail1">{"Cancelled by Driver"}</p>
              <p className="card-detail2">{"10%"}</p>
              <div className="card-detail3 flex">
                <p clas="percentage">{"20%"}</p>
                <CaretDownFilled className="cards-decreased" />
              </div>
            </div>

            <div className="flex card-row">
              <p className="card-detail1">{"Cancelled by Client"}</p>
              <p className="card-detail2">{"40%"}</p>
              <div className="card-detail3 flex">
                <p clas="percentage">{"70%"}</p>
                <CaretDownFilled className="cards-decreased" />
              </div>
            </div>
          </div>
        </Col>

        <Col span={5}>
          <div className="card">
            <div className="card-heading">
              <div className="card-icon" style={{ backgroundColor: "#f6faec" }}>
                <ThunderboltTwoTone twoToneColor={"#83bb32"} />
              </div>
              <p className="card-title">{"Impact Tracker"}</p>
            </div>

            <div className="flex card-row">
              <p className="card-detail1">{"Kilometers Saved"}</p>
              <p className="card-detail2">{"24 kms"}</p>
            </div>
            <div className="flex card-row">
              <p className="card-detail1">{"Carbon Emissions"}</p>
              <p className="card-detail2">{"3%"}</p>
            </div>
          </div>
        </Col>

        <Col span={5}>
          <div className="card">
            <div className="card-heading">
              <div className="card-icon" style={{ backgroundColor: "#e6faff" }}>
                <ThunderboltTwoTone twoToneColor={"#077ecd"} />
              </div>
              <p className="card-title">{"Average Speed"}</p>
            </div>

            <div className="flex">
              <CarFilled />
              <p className="card-detail1">{"45km/hour"}</p>
              <div className="card-detail3 flex">
                <p clas="percentage">{"10%"}</p>
                <CaretUpFilled className="cards-increased" />
              </div>
            </div>
          </div>
        </Col>

        <Col span={8}>
          <div className="card carousel">
            <Carousel>
              <div>
                <p className="carousel-title">
                  {"Between 5th Nov and 10th Nov"}
                </p>
                <p className="carousel-subtitle">
                  {"23 cancellations were made"}
                </p>
              </div>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section1;
