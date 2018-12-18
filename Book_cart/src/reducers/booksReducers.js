'use strict'


export function booksReducers(state={books:[
  {     
    _id: 1,    
     title:'Book title 1', 
         description: 'This is the book 1 description',
    price: 99.99
  },
  {     
    _id: 2,    
     title:'Book title 2', 
         description: 'This is the book 2 description',
    price: 199.99

  
  }]}, action){   
	switch (action.type) {
    case "GET_BOOKS":
     
         return {...state,books:[...state.books]}
      break;  
	     case "POST_BOOK":
	   //   let books=state.books.concat(action.payload);

    // return {books};
    return {books:[...state.books,...action.payload]}
      break;  
    case "DELETE_BOOK":
   
    const currentBookToDelete = [...state.books]	
        
    const indexToDelete = currentBookToDelete.findIndex(    
       function(book){
        return book._id == action.payload;
      }
    )
   
     return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
           break;


case "UPDATE_BOOK": 
const currentBookToUpdate = [...state.books]
    const indexToUpdate = currentBookToUpdate.findIndex(       function(book){
        return book._id == action.payload._id;
      }
    )
   
    const newBookToUpdate = {     
      ...currentBookToUpdate[indexToUpdate],       
    	title: action.payload.title
    }
      console.log("what is it newBookToUpdate", newBookToUpdate);
        return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}  
   break;

            } 
         
          return state
   }