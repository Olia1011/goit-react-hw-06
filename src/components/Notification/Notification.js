import React from "react";
import error from './Notification.module.css';

const Notification = ({name = ''}) => ( 
<div className={error.error}>
	<h3 className={error.message}>{`${name} already exist!`}
</h3>
</div>
)

export default Notification;