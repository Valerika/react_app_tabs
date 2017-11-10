import React from 'react';
import Script from 'react-load-script';

const DummyChart = () => (
    <div className="tab__content">
        <div>Please, reload the page to draw the graph.</div>
        <br/>
        <div id="highcharts-ovipab">
            <Script url="http://cloud.highcharts.com/inject/ovipab"/>
        </div>
    </div>
);

export default DummyChart;
