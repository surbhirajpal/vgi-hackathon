import { Radio, Row, Col, Card } from "antd";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import { CaretUpFilled, CaretDownFilled } from "@ant-design/icons";

import ConfigProvider from "../../components/ConfigProvider";
import "./Dashboard.scss";

const Dashboard = () => {
  const [optionValue, setOptionValue] = useState("Day");

  const [totalBookingsCount, setTotalBookingCount] = useState(0);
  const [bookingPercentage, setBookingPercentage] = useState(0);
  const [bookingDirection, setBookingDirection] = useState(0);

  const [totalCancelledCount, setTotalCancelledCount] = useState(0);
  const [cancelPercentage, setCancelPercentage] = useState(0);
  const [cancelDirection, setCancelDirection] = useState(0);

  const options = [
    { label: "Day", value: "Day" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ];

  const onOptionChange = ({ target: { value } }) => {
    setOptionValue(value);
  };

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/data.csv");
      const csvText = await response.text();

      const day1 = "2024-09-01";
      const day2 = "2024-09-02";

      Papa.parse(csvText, {
        header: true,
        complete: (result) => {
          const rows = result.data;
          setTotalBookingCount(rows.length);

          const cancelledCount = rows.filter(
            (row) => row["Passenger status"] === "Cancelled"
          ).length;
          setTotalCancelledCount(cancelledCount);

          // Filter bookings for Day 1 and Day 2
          const day1Bookings = rows.filter(
            (row) =>
              row["Actual Pickup Time"] &&
              row["Actual Pickup Time"].includes(day1)
          ).length;

          const day2Bookings = rows.filter(
            (row) =>
              row["Actual Pickup Time"] &&
              row["Actual Pickup Time"].includes(day2)
          ).length;

          // Calculate percentage change
          const change =
            day1Bookings === 0
              ? day2Bookings > 0
                ? 100 // Infinite increase
                : 0 // No change
              : ((day2Bookings - day1Bookings) / day1Bookings) * 100;

          // Determine the direction of change
          const bookingDirection =
            day1Bookings === 0 && day2Bookings > 0
              ? "Increased (new bookings)"
              : change > 0
              ? "Increased"
              : change < 0
              ? "Decreased"
              : "No Change";

          setBookingPercentage(Math.abs(change).toFixed(2));
          setBookingDirection(bookingDirection);

          // Filter cancelled trips for Day 1 and Day 2
          const day1CancelledTrips = rows.filter(
            (row) =>
              row["Actual Pickup Time"] &&
              row["Actual Pickup Time"].includes(day1) &&
              row["Passenger status"] === "Cancelled"
          ).length;

          const day2CancelledTrips = rows.filter(
            (row) =>
              row["Actual Pickup Time"] &&
              row["Actual Pickup Time"].includes(day2) &&
              row["Passenger status"] === "Cancelled"
          ).length;

          // Calculate percentage change for cancelled trips
          const cancelledChange =
            day1CancelledTrips === 0
              ? day2CancelledTrips > 0
                ? 100 // Infinite increase
                : 0 // No change
              : ((day2CancelledTrips - day1CancelledTrips) /
                  day1CancelledTrips) *
                100;

          // Determine the direction of change for cancelled trips
          const direction =
            day1CancelledTrips === 0 && day2CancelledTrips > 0
              ? "Increased (new cancelled trips)"
              : cancelledChange > 0
              ? "Increased"
              : cancelledChange < 0
              ? "Decreased"
              : "No Change";

          // Update states
          setCancelPercentage(Math.abs(cancelledChange).toFixed(2));
          setCancelDirection(direction);
        },
      });
    };

    fetchCSV();
  }, []);

  return (
    <div className="container dashboard">
      <p className="title">{"Dashboard"}</p>
      <ConfigProvider>
        <Radio.Group
          options={options}
          onChange={onOptionChange}
          defaultValue={optionValue}
          optionType="button"
          buttonStyle="solid"
        />

        <div className="dashboard-cards">
          <Row gutter={16}>
            <Col span={8}>
              <Card title={"Total Bookings"} bordered={true}>
                <div className="dashboard-cards__detail">
                  <p className="dashboard-cards__count">{totalBookingsCount}</p>
                  <div className="dashboard-cards__percentage">
                    <p>{`${bookingPercentage}%`}</p>
                    {bookingDirection === "Increased" ? (
                      <CaretUpFilled className="dashboard-cards__increased" />
                    ) : (
                      <CaretDownFilled className="dashboard-cards__decreased" />
                    )}
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card title={"Cancelled Bookings"} bordered={false}>
                <div className="dashboard-cards__detail">
                  <p className="dashboard-cards__count">{totalCancelledCount}</p>
                  <div className="dashboard-cards__percentage">
                    <p>{`${cancelPercentage}%`}</p>
                    {cancelDirection === "Increased" ? (
                      <CaretUpFilled className="dashboard-cards__increased" />
                    ) : (
                      <CaretDownFilled className="dashboard-cards__decreased" />
                    )}
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card title={"Delayed Time"} bordered={false}>
                {"152 mins"}
              </Card>
            </Col>
          </Row>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Dashboard;
