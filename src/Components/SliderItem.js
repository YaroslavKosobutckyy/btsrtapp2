import React from 'react';
import { Card } from 'react-bootstrap';
import temp from '../Images/temp.png';
import pr from '../Images/pr.png';


class SliderItem extends React.Component{


    render() {
        return(
        <div>
         {this.props.city &&
                <div className='SliderItem'>
                    <Card.Title>
                        <h1>Місто: {this.props.city}</h1>
                    </Card.Title>
                    <Card.Text>
                        <div>
                            <img  src={temp} width="80" height="80"/>
                            {this.props.temp} &#8451;
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div>
                            <img  src={pr} width="80" height="80"/>
                            {this.props.pressure} Pa
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div className="Iconvid">
                           <p>__</p> 
                        </div>
                    </Card.Text>
                </div>
         }
         </div>
        );
    }
}

export default SliderItem;
