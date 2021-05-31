
import React, { useEffect } from "react";
import _last from 'lodash/last';
import _head from 'lodash/head';
import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";


const getPrices = data => (data || []).map(tr => parseFloat(tr.price));

const getPercentChange = (data = [0]) => (_last(data) - _head(data)) * 100 / (_head(data) || 1);

const getLastPrice = data => Number(_last(data)).toFixed(2);

const series = [{
	name: "Desktops",
	data: getPrices([])
}];
const options = {
	chart: {
		id: 'btc-chart',
		height: 100,
		type: 'line',
		zoom: {
			enabled: false
		},

		toolbar: {
			show: false,
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 2,
		colors: ["#F7931A"],
	},
	grid: {
		show: false,
	},
	tooltip: {
		enabled: false,
		x: {
			format: "dd MMM yyyy"
		},
	},
	xaxis: {
		categories: [],
		axisBorder: {
			show: false
		},

		labels: {
			show: false
		}
	},
	yaxis: {
		labels: {
			show: false
		}
	},
};
export default ({ trades }) => {
	const prices = getPrices(trades);
	useEffect(() => {
		ApexCharts.exec('btc-chart', 'updateSeries', [{
			data: prices,
		}], true);
	}, [prices]);
	return (
		<>
			<h3>USDT {getLastPrice(prices)}</h3>
			<span className="text-success">{Number(getPercentChange(prices) || 0).toFixed(2)} %</span>
			<ReactApexChart
				options={options}
				series={series}
				type="line"
				height={100}
			/>
		</>
	);
};
