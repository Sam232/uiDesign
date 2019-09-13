import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class MTNChart extends Component {
    state = {
        data: []
    }

    componentDidMount = () => {
        return this.setState({
            data: [120, 190, 300, 50, 20, 30, 10, 40, 40, 54, 12, 32]
        })
    }

    render() {
        const { data } = this.state
        return (
            <div className="row">
                <div class="col-md-12">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Line chart for all the occuring transactions</h5>
                            <h4 class="card-title">Total Transaction Statistics</h4>
                        </div>
                        <div class="card-body">
                            <div style={{position: "relative", height: "60vh", width: "86vw"}}>
                            <Line
                                data={{
                                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                                    datasets: [{
                                        label: 'Statistics For All Processed Transactions In GHS',
                                        data: data,
                                        backgroundColor: [
                                            '#FFCA06'
                                        ],
                                        borderColor: [
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427',
                                            '#EA2427'
                                            
                                        ],   
                                    }]
                                }}
                                options= {{
                                    responsive: true,
                                    maintainAspectRatio: false
                                }}
                                />
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="stats">
                            <i class="now-ui-icons ui-2_time-alarm"></i> Since Manilla Checkout System Started
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MTNChart;