import React, { useState } from 'react';
import { Button, Modal } from 'antd';
export default function Login({ className }) {
    const [open, setOpen] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: () => setOpen(true), className: className }, "\u767B\u5F55"),
        React.createElement(Modal, { title: "\u767B\u5F55", open: open, onCancel: () => setOpen(false), onOk: () => setOpen(false) },
            React.createElement("p", null, "\u767B\u5F55\u5F39\u7A97"))));
}
