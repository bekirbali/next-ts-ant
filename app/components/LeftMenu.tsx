import React from "react";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Divider, Menu } from "antd";
import type { GetProp, MenuProps } from "antd";

type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("MAIN", "sub1", <AppstoreOutlined />, [
    getItem("Dashboard", "3"),
    getItem("Work Progress", "4"),
    getItem("Task Schematic", "5"),
    getItem("All Projects", "6"),
    getItem("All Tasks", "17"),
    getItem("Allcation", "18"),
    getItem("Gantt", "19"),
    getItem("Calendar", "101"),
    getItem("People", "11"),
    getItem("Analysis", "12"),
  ]),
  getItem("OTHER", "sub2", <SettingOutlined />, [
    getItem("Settings", "7"),
    getItem("Roles", "8"),
    getItem("Logs", "9"),
    getItem("Help", "10"),
  ]),
];

const App: React.FC = () => {
  return (
    <div className="h-[100vh] bg-[#f3f3f3]">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        className="bg-[#f3f3f3]"
        items={items}
        expandIcon={false}
        translate="no"
      />
      <Divider type="horizontal" />
      <Divider type="horizontal" />
    </div>
  );
};

export default App;
