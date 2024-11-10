import { ConfigProvider } from "antd";

const CustonConfigProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#003C7D",
          controlOutline: "#003C7D",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default CustonConfigProvider;
