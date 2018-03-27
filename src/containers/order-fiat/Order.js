import React from 'react';

import '../../css/order-fiat.scss';

import OrderInitial from '../order/OrderInitial';
import OrderPayment from './OrderPayment';
import OrderPaid from './OrderPaid';
import OrderPreReleased from './OrderPreReleased';
import OrderReleased from '../order/OrderReleased';
import OrderStatus from './OrderStatus';

import OrderSuccess from '../order/OrderSuccess';
import OrderFailure from '../order/OrderFailure';
import OrderRefunded from '../order/OrderRefunded';

import STATUS_CODES from '../../statusCodes';

const Order = (props) => {
	let order;
	switch (STATUS_CODES[props.order.status_name[0][0]]) {
		case 'INITIAL':
			order = <OrderInitial {...props} />;
			break;
		case 'PAID_UNCONFIRMED':
			order = <OrderPayment {...props} />;
			break;
		case 'PAID':
			order = <OrderPaid {...props} />;
			break;
		case 'PRE_RELEASE':
			order = <OrderPreReleased {...props} />;
			break;
		case 'RELEASE':
			order = <OrderReleased {...props} />;
			break;
		case 'COMPLETED':
			order = <OrderSuccess {...props} />;
			break;
		case 'CANCELLED':
			order = <OrderFailure {...props} />;
			break;
		case 'REFUNDED':
			order = <OrderRefunded {...props} />;
			break;
		default:
			order = <h2>Unknown order state, something went wrong</h2>;
	}

	return <div>
		{order}
		<OrderStatus status={props.order.status_name[0][0]} />
	</div>;
};

export default Order;
