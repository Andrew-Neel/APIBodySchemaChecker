function schemaChecker(body, schema){
  //foreach loop to check each element in an object
  body.forEach(element =>
    //first check if an element is requred and if it is present
    if(schema.element.required === true && body.element !== undefined){
      //if present and required then check if the types match
      if(body.element.type === schema.element.type){
        console.log(body.element + " is correct")
      }else{
        return false
      }
      //check if an element is not required but is present
    }else if (schema.element.required === false && body.element !== undefined) {
      //check if element types match
      if(body.element.type === schema.element.type){
        console.log(body.element + " is correct")
      }else{
        return false
      }
      //if an elememt is not required and not here then move on
    }else if(schema.element.required === false && body.element === undefined){
      console.log(body.element + " is not here")
      //if the other tests fail then the element is undefined so return false
    }else{
      return false;
    })
    //if the loop completes without ever returning false then all elements are correct
    //so then return true
    return true;
}
