import React, { useState } from 'react'
import { Button, Modal } from 'antd'

interface Props {
	className: string
}

export default function Login ({ className} : Props) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setOpen(true)} className={className}>登录</Button>
			<Modal
				title="登录"
				open={open}
				onCancel={() => setOpen(false)}
				onOk={() => setOpen(false)}
			>
				<p>登录弹窗</p>
			</Modal>
		</>
	)
}