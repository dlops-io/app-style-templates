import React, { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Plot from 'react-plotly.js';

import DataService from "../../services/DataService";
import styles from './styles';


const PredictionPlot = (props) => {
    const { classes } = props;

    console.log("================================== PredictionPlot ======================================");


    // Component States
    const [plotData, setPlotData] = useState([]);
    const loadPlotData = () => {
        // DataService.GetAppleFinanceData()
        //     .then(function (response) {
        //         var rows = response.data;
        //         console.log(rows);

        //         var trace = {
        //             x: unpack(rows, 'Date'),
        //             close: unpack(rows, 'AAPL.Close'),
        //             high: unpack(rows, 'AAPL.High'),
        //             low: unpack(rows, 'AAPL.Low'),
        //             open: unpack(rows, 'AAPL.Open'),

        //             // Colors
        //             increasing: { line: { color: 'black' } },
        //             decreasing: { line: { color: 'red' } },

        //             type: 'candlestick',
        //             xaxis: 'x',
        //             yaxis: 'y'
        //         };
        //         setPlotData([trace]);
        //     });

        DataService.GetBTCUSDData()
            .then(function (response) {
                var rows = response.data;
                console.log(rows);

                var trace = {
                    x: unpack(rows, 'open_time'),
                    close: unpack(rows, 'close_price'),
                    high: unpack(rows, 'high_price'),
                    low: unpack(rows, 'low_price'),
                    open: unpack(rows, 'open_price'),

                    // Colors
                    increasing: { line: { color: 'green' } },
                    decreasing: { line: { color: 'red' } },

                    type: 'candlestick',
                    xaxis: 'x',
                    yaxis: 'y'
                };
                setPlotData([trace]);
            });
    }

    // Setup Component
    useEffect(() => {
        loadPlotData();
    }, []);

    // Handlers

    // Utils
    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }

    return (
        <div className={classes.root}>
            {plotData.length > 0 &&
                <Plot
                    data={plotData}
                    layout={{
                        dragmode: 'zoom',
                        showlegend: false,
                        xaxis: {
                            rangeslider: {
                                visible: true
                            },
                            color: '#FFFFFF',
                            type: 'date',
                        },
                        yaxis: {
                            autorange: true,
                            color: '#FFFFFF',
                            type: 'linear',
                        },
                        plot_bgcolor: "transparent",
                        paper_bgcolor: "#FFF1",
                    }}
                    config={{ responsive: true }}
                    style={{ width: "100%" }}
                />
            }
        </div>
    );
};

export default withStyles(styles)(PredictionPlot);