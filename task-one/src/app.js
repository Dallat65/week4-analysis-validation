

import FileTree from './fileTree';

export function createFileTree(input) {

function arrange (input){
let parentArr = [];
let childArr = [];

for (let i=0; i< input.length; i++){
  if (input[i].hasOwnProperty('parentId')) {
    childArr.push(input[i])
  }else {
    parentArr.push(input[i])
  }
}
  for (let i=0; i< parentArr.length; i++) {
    for (let j=0; j< childArr.length; j++){
      if (parentArr[i].id === childArr[j].parentId){
        parentArr.push(childArr[j])
         }
    }
  }
return parentArr;
}
input = arrange(input)
  const fileTree = new FileTree();

  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}