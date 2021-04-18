import React from 'react';
import {Carousel} from 'react-bootstrap';
import photka from '../Images/photoob.png';
import SliderItem from "../Components/SliderItem";
import {connect} from "react-redux";
import Photo from "../Components/Photo";

class Slider extends React.Component {

    render() {
        const widget1Data = this.props.weatherInfo?.data?.widget1;
        const widget2Data = this.props.weatherInfo?.data?.widget2;
        const widget3Data = this.props.weatherInfo?.data?.widget3;
        return (
            <Carousel>
                <Carousel.Item style={{'height': '530px'}}>
                    {widget1Data.city ?
                        <Photo city={widget1Data.city}/>
                        : <img
                            className="d-block w-100"
                            src={photka}
                            alt="Photo not found"
                        />
                    }
                    <Carousel.Caption>
                        <SliderItem {...widget1Data} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '530px'}}>
                    {widget2Data.city ?
                        <Photo city={widget2Data.city}/>
                        : <img
                            className="d-block w-100"
                            src={photka}
                            alt="Photo not found"
                        />
                    }
                    <Carousel.Caption>
                        <SliderItem {...widget2Data} />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '530px'}}>
                    {widget3Data.city ?
                        <Photo city={widget3Data.city}/>
                        : <img
                            className="d-block w-100"
                            src={photka}
                            alt="Photo not found"
                        />
                    }
                    <Carousel.Caption>
                        <SliderItem {...widget3Data} />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

const mapStateToProps = state => ({
    weatherInfo: state.weatherInfo
});

export default connect(mapStateToProps)(Slider);
