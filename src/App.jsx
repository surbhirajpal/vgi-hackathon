import { ConfigProvider, Layout } from "antd";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Slider from "./components/Slider";

import Dashboard from "../src/pages/Dashboard";
import Analysis from "../src/pages/Analysis";

import "./styles/global.scss";

const { Content } = Layout;

const Root = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Slider />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "analysis",
        element: <Analysis />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
