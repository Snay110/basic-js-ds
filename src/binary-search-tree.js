const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }


  add( data ) {
  const newAdd = {data, left:null,  right:null};
  
  if (!this._root) {
    this._root = newAdd
    return;
  }

   const addData = (node, data) =>{
if(data < node.data){
  if(!node.left){
    node.left = newAdd
  } else{
    addData(node.left, data)
  }

}  else if(data > node.data){
  if(!node.right){
    node.right = newAdd
  }else{
    addData(node.right, data);
  }
  }
   };
   addData (this._root, data)
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
