import React, { Component } from 'react'

class PanelHeader extends Component {
    render() {
        const { stat } = this.props;

        return (
            <div className="panel-header panel-header-sm">
                <div className="statistics">
                    <div className="icon icon-primary">                        
                        <div className="info" >
                            <div className="icon icon-primary">
                                <h3 className="info-title"></h3>
                                <h4 className="title text-white text-center" style={{marginTop: "-30px"}}><i className="now-ui-icons media-2_sound-wave"></i> Statistics For {stat}</h4>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        );
    }
}

export default PanelHeader;