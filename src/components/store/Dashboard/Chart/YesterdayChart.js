import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class YesterdayChart extends Component {
    state = {
        mobileMoney: [],
        debitCard: []
    }

    componentDidMount = () => {
        return this.setState({
            mobileMoney: [120, 190, 300, 50],
            debitCard: [300, 200]
        })
    }

    render() {
        const { mobileMoney, debitCard } = this.state;

        return (
            <div className="row" >
                <div class="col-md-6">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Line chart for all the occuring transactions in GHC</h5>
                            <h4 class="card-title">Mobile Money Transaction Statistics</h4>
                        </div>
                        <div class="card-body">
                            <div style={{position: "relative", height: "60vh", width: "41vw"}}>
                            <Doughnut
                                data={{
                                    labels: ['MTN', 'ATO', 'VOD', 'GLO'],
                                    datasets: [{
                                        label: 'Statistics For All Processed Transactions In GHS',
                                        data: mobileMoney,
                                        backgroundColor: [
                                            '#FFCA06',
                                            '#253E77',
                                            '#F82023',
                                            '#25AC1B'
                                        ],
                                        borderColor: [],   
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
                            <i class="now-ui-icons ui-2_time-alarm"></i> Since Today
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Line chart for all the occuring transactions IN GHC</h5>
                            <h4 class="card-title">Debit Card Transaction Statistics</h4>
                        </div>
                        <div class="card-body">
                            <div style={{position: "relative", height: "60vh", width: "41vw"}}>
                            <Doughnut
                                data={{
                                    labels: ['VIS', 'MAS'],
                                    datasets: [{
                                        label: 'Statistics For All Processed Transactions In GHS',
                                        data: debitCard,
                                        backgroundColor: [
                                            '#FFCA06',
                                            '#F82023'
                                        ],
                                        borderColor: [],   
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
                            <i class="now-ui-icons ui-2_time-alarm"></i> Since Today
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default YesterdayChart;