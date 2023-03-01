import React from "react";
import { Select } from "antd";
const Option = Select.Option;
export default function UserSelect(props) {
    return (React.createElement(Select, { ...props, style: { width: 120 } },
        React.createElement(Option, { value: "zhangsan" }, "\u5F20\u4E09"),
        React.createElement(Option, { value: "lisi" }, "\u674E\u56DB"),
        React.createElement(Option, { value: "wangwu" }, "\u738B\u4E94"),
        React.createElement(Option, { value: "test" }, "test")));
}
