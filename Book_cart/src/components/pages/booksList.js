'use strict'
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {getBooks} from '../../actions/booksActions';
import {Carousel,Grid,Col,Row,Button} from 'react-bootstrap';
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';
class BooksList extends React.Component{
	componentDidMount(){
		this.props.getBooks();
	}
	render(){
		//console.log('Are we access: ',this.props.books);
		const booksList=this.props.books.map(function(booksArr){
			return(
				<Col xs={12} sm={6} md={4} key={booksArr._id}>
				<BookItem 
				_id={booksArr._id}
				title={booksArr.title}
				description={booksArr.description}
				price={booksArr.price} />
				</Col>

		)})
		return(
			<Grid>
			<Row>
			<Carousel>
  	<Carousel.Item>
    <img width={900} height={300} alt="900x300" src="https://cdn-images-1.medium.com/max/1000/1*YLlZ96J3p8GFkIh1USVMzg.jpeg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={300} alt="900x300" src="https://d3i6fh83elv35t.cloudfront.net/static/2018/08/Books_HD_8314929977-1024x682.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={300} alt="900x300" src="https://www.helperhelper.com/wp-content/uploads/2015/10/bigstock-Stack-Of-Books-70033240.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={300} alt="900x300" src="https://media.treehugger.com/assets/images/2018/07/books-stack.jpg.860x0_q70_crop-scale.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</Row>
			<Row style={{marginTop:'15px'}}>
			<Cart />
			</Row>
			<Row >
			<Col xs={12} sm={6}><BooksForm /></Col>
			<Col xs={12} sm={6}>
			{booksList}
			</Col>

			</Row>
			</Grid>
		)
	}
}
function mapStateToProps(state){
return{
	books:state.books.books
}
}
function mapDispatchToProps(dispatch){
return  bindActionCreators({getBooks:getBooks},dispatch)


}
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);