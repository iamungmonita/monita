export default (state, action) => {
  switch(action.type) {
    case 'SHOW':
      return {
        ...state, 
        categories: state.categories.map((el) => {
          console.log(el);
        })
        
      }

    default: 
    return state;
  }
}