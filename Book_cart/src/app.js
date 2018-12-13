'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';
  
const  middleware=applyMiddleware(logger);
const store=createStore(reducers,middleware);

import BooksList from './components/pages/booksList';
render(
  <Provider store={store}>
  <BooksList />
  </Provider>,document.getElementById('app')
);

// store.dispatch(postBooks (
	
// ))
// store.dispatch(deleteBooks(
//  {	_id: 2
// } ))
// store.dispatch(updateBooks(
//  {_id: 1 , 
//  	 	title:'learning'
//    }
//  ))

// store.dispatch(
// 	addToCart
// 	(
// 		[{
// 			_id:2
// 		}])
// 	)


