import React, { Component } from "react"
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

  }
  renderDish(dish) {
    if(dish != null){
        const comment = dish.comments.map((comment) => {
          return(
            <ul class="list-unstyled">
              <li>{comment.comment}</li>
              <li>--{comment.author} , {comment.date}</li>
            </ul>
          )
        })
      
      return(
        <>
        <div className="col-12 col-md-5 m-1">
          <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comment}
      </div>
      </>
      )} else {
        return(<div></div>)
      }
  }
  render() {
      
    return(
      <>
      {this.renderDish(this.props.dish)}
      </>
    )
  }
}

export default DishDetail