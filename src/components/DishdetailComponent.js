import React, { Component, useState,useEffect } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, Button, FormGroup, Input, Form,Row, Col, Label, CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


// const [isModalOpen, handleModal] = useState(false)


const required = (val) => {console.log(val && val.length,{val}); return val && val.length;}
const maxLength = (len) => (val) => {/*console.log({len,val});*/ return !(val) || (val.length <= len);}
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDishComments(DishComment){
        const [isModalOpen, handleModal] = useState(false)
        
        // useEffect(() => {
        //     console.log("useEffec being called again")
        // }, [isModalOpen])
        

        const handleComment = (e)=>{
              handleModal(!isModalOpen)
        }
        
        function handleSubmit(values) {
            console.log('Comment submitted is:' + JSON.stringify(values));
            alert('Comment submitted is: ' + JSON.stringify(values));
        }

        const CommentForm=()=>{

         return(    
            <Modal isOpen={isModalOpen} toggle={()=>handleModal(!isModalOpen)}>
            <ModalHeader toggle={handleComment}>Submit Comment</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Label htmlFor="Rating">Rating</Label>
            <Row className="form-group">
                <Col md={12}>
                <Control.select model=".rating" id="rating" className="form-control"
                validators={{
                    required
                }}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Control.select>
              <Errors
              className="text-danger"
              model=".rating"
              show="touched"
              messages={{
                  required: 'Required ',
              }}/>
                    
                </Col>
            </Row>
            <Label htmlFor="name">Your Name</Label>
            <Row className="form-group">
                <Col md={12}>
                   <Control.text model=".name" id="name" name="name"
                        placeholder="Your Name"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                         />
                    <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required: 'Required ',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                     />
                </Col>
            </Row>
            <Label htmlFor="comment">Comment</Label>
            <Row className="form-group">
                <Col md={12}>
                   <Control.textarea model=".comment" id="comment" name="comment"
                        className="form-control"
                        rows="6"
                        validators={{
                             maxLength: maxLength(150)
                        }}
                         />
                    <Errors
                        className="text-danger"
                        model=".comment"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 100 characters or less'
                        }}
                     />
                </Col>
            </Row>
            <Row className="form-group">
                <Col md={{ size: 10, offset: 0 }}>
                    <Button type="submit" color="primary">
                        Send Feedback
                    </Button>
                </Col>
            </Row>
        </LocalForm>
                
            </ModalBody>
        </Modal>
            )
        }


        if(DishComment!=null){
         console.log({DishComment})
         let idx = DishComment.length
        let commentsAll = DishComment.map(
            (cmts,index)=>(
                    <div>
                    <CardBody>
                    <CardText>{cmts.comment}</CardText>
                    <CardText>--{cmts.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}</CardText>
                    {index==idx-1?<Button outline onClick={handleComment} ><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>:null}
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
                 {CommentForm()?CommentForm():"CommentForm()"}
                 
             </div>)
            }
            
            // else
            // return <div></div>
    }

    function renderDish(dish) {
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

    const DishDetail = (props)=> {

        

        return (
            <div className="container">
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
                    <div className="col-12 col-md-5 m-1">
                      {renderDish(props.dish)}  
                    </div>

                    <div className="col-12 col-md-5 m-1">
                    {RenderDishComments(props.comments)}
                    </div>

                    {}
                      
             </div>
             </div>
        )
    }

export default DishDetail;



// class DishDetail extends Component {

//     constructor(props) {
//         super(props);
//     }
    

//     renderDishComments(DishComment){
//         if(DishComment!=null){
//          console.log({DishComment})
//         let commentsAll = DishComment.comments.map(
//             (cmts)=>(
//                     <div>
//                     <CardBody>
//                     <CardText>{cmts.comment}</CardText>
//                     <CardText>--{cmts.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmts.date)))}</CardText>
//                     </CardBody>
//                     </div> 
//                 )
//         )

//         return (
//             <div>
//                 <div>
//                     <h4>Comments</h4>
//                 </div>
//                  {commentsAll}
//              </div>)
//             }
            
//             else
//             return <div></div>
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return (
//             <div className="car">
//                 <div className="">
//                     <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                         </Card>
//                         </div>

//                    </div>            
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }

//     render() {
//         console.log(this.props)
//         let dataComments = this.props.dish;
//         if(this.props.sendData!=null){
//             console.log(12);
//         }
//         return (
//             <div className="container">
//             <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                       {this.renderDish(this.props.dish)}  
//                     </div>

//                     <div className="col-12 col-md-5 m-1">
//                     {this.renderDishComments(this.props.dish)}
//                     </div>
                      
//              </div>
//              </div>
//         )
//     }

// }

// export default DishDetail;

