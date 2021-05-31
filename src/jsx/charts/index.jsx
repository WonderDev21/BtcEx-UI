
import React, { useEffect } from "react";
import _last from 'lodash/last';
import _head from 'lodash/head';
import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";


const getPrices = data => (data || []).map(tr => parseFloat(tr.price));

const getPercentChange = (data = [0]) => (_last(data) - _head(data)) * 100 / (_head(data) || 1);

const getLastPrice = data => Number(_head(data)).toFixed(2);

const series = [{
  name: "Desktops",
  data: getPrices([])
}];
const getOptions = (chartId) => ({
  chart: {
    id: chartId,
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
});
export default ({ chartId, trades }) => {
  const prices = getPrices(trades);
  // const [chartOptions, setOptions] = useState(options);
  useEffect(() => {
    ApexCharts.exec(chartId, 'updateSeries', [{
      data: prices,
    }], true);
  }, [prices, chartId]);
  const percentChange = Number(getPercentChange(prices) || 0).toFixed(2);
  return (
    <>
      <h3>USDT {getLastPrice(prices)}</h3>
      <span className={percentChange > 0 ? "text-success" : "text-danger"}>
        {percentChange} %
      </span>
      <ReactApexChart
        options={getOptions(chartId)}
        series={series}
        type="line"
        height={100}
      />
    </>
  );
};
