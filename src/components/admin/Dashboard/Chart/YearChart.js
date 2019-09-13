import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class YearChart extends Component {
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
                            <Bar
                                data={{
                                        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                                        datasets: [{
                                            label: 'MTN',
                                            data: [100, 200, 300, 10, 22, 11, 939, 289, 289, 389, 189, 11],
                                            backgroundColor: [
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06'
                                            ],
                                            borderColor: [],   
                                        },
                                        {
                                            label: 'ATO',
                                            data: [400, 200, 30, 10, 22, 11, 939, 289, 289, 389, 189, 11],
                                            backgroundColor: [
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77',
                                                '#253E77'
                                            ],
                                            borderColor: [],   
                                        },
                                        {
                                            label: 'VOD',
                                            data: [38, 10, 99, 10, 22, 11, 939, 289, 289, 389, 189, 11],
                                            backgroundColor: [
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023'
                                            ],
                                            borderColor: [],   
                                        },
                                        {
                                            label: 'GLO',
                                            data: [10, 20, 300, 10, 22, 11, 939, 289, 289, 389, 189, 11],
                                            backgroundColor: [
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B',
                                                '#25AC1B'
                                            ],
                                            borderColor: [],   
                                        }
                                    ]
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
                            <Bar
                                data={{
                                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                                    datasets: [{
                                            label: "VIS",                                        
                                            data: [38, 10, 99, 10, 22, 11, 939, 289, 289, 389, 189, 11],
                                            backgroundColor: [
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06',
                                                '#FFCA06'
                                            ],
                                            borderColor: [],   
                                        },
                                        {
                                            label: "MAS",                                        
                                            data: [30, 10, 99, 2, 40, 11, 939, 50, 289, 444, 189, 11],
                                            backgroundColor: [
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023',
                                                '#F82023'
                                            ],
                                            borderColor: [], 
                                        }
                                    ]
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

export default YearChart;