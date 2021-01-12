import React, { Component } from 'react';
import { Media } from 'reactstrap';

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {

    constructor(props) {
        super(props);
    }
    

    renderDishComments(DishComment){
        if(DishComment!=null){
         console.log({DishComment})
        let commentsAll = DishComment.comments.map(
            (cmts)=>(
                    <div>
                    <CardBody>
                    <CardText>{cmts.comment}</CardText>
                    <CardText>--{cmts.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}</CardText>
                    </CardBody>
                    </div> 
                )
        )

        return (
            <div>
                <div>
                    <h4>Comments</h4>
                </div>
                 {commentsAll}
             </div>)
            }
            
            else
            return <div></div>
    }

    renderDish(dish) {
        if (dish != null)
            return (
            <div className="car">
                <div className="">
                    <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                        </Card>
                        </div>

                   </div>            
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        console.log(this.props)
        let dataComments = this.props.dish;
        if(this.props.sendData!=null){
            console.log(12);
        }
        return (
            <div className="container">
            <div className="row">
                    <div className="col-12 col-md-5 m-1">
                      {this.renderDish(this.props.dish)}  
                    </div>

                    <div className="col-12 col-md-5 m-1">
                    {this.renderDishComments(this.props.dish)}
                    </div>
                      
             </div>
             </div>
        )
    }

}

export default DishdetailComponent;

