import {useState} from 'react';
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import SliderMenuData from "./SliderMenuData";
import "./Slider.scss";
import sliderImage from '../../../src/assets/logo.svg';

const { Sider } = Layout;

const CustomSlider = () => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const selectedKey = location.pathname;

  return (
    <Sider collapsible collapsed={collapsed} width={250} className="slider" onCollapse={(value) => setCollapsed(value)}>
      <div className="slider-section">
        {/* <div className="slider-user">
          <div className="slider-user__profile">
            <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
          </div>
          <p className="slider-user__name">{"John Doe"}</p>
          <p className="slider-user__email">{"johndoe123@gmail.com"}</p>
        </div> */}
        <div className="slider-section__logo">
          <img src={sliderImage} />
        </div>
        
        <Menu
          theme="dark"
          mode="inline"
          className="slider-menu"
          selectedKeys={[selectedKey]}
        >
          {SliderMenuData.map((item) => {
            return (
              <Menu.Item key={item.path} icon={item.icon} className='slider-menu__item'>
                <Link to={item.path}>{collapsed ? '' : item.title}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>

      {/* <div className="slider-section">
        <div className="slider-section__logo">
          <img src={sliderImage} />
        </div>
      </div> */}
    </Sider>
  );
};

export default CustomSlider;
