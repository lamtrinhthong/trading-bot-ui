import { timeParse } from "d3-time-format";
import axios from 'axios';

function parseData(parse) {
    const parseDate = timeParse('%Y-%m-%dT%H:%M:%SZ');

	return function(d) {
		d.date = parseDate(d.date);
		d.open = +d.open_price;
		d.high = +d.high_price;
		d.low = +d.low_price;
		d.close = +d.close_price;
		d.volume = 100;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
    const apiUrl = "http://192.168.1.13:8000/chart/candlesticks/";
    return axios.get(apiUrl)
        .then(response => {
            return response.data.map(d => parseData(parseDate)(d));
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error;
        });
}