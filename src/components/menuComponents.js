import React, { Component } from 'react';
import { Media } from 'reactstrap';

import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

    //     this.state = {
    //         selectedDish: null
    //     }
    }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }

    // renderDish(dish) {
    //     if (dish != null)
    //         return (
    //         <div className="car">
    //             <div className="">
    //                 <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                   <CardTitle>{dish.name}</CardTitle>
    //                   <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //                     </Card>
    //                     </div>
                        
    //                     <div className="co"> 
    //                     <Card>
    //                     hello
    //                     </Card>
    //                     </div>
    //                </div>            
    //         );
    //     else
    //         return (
    //             <div></div>
    //         );
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card 
                        onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
            </div>
        );
    }
}

export default Menu;