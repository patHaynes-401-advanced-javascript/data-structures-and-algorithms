const linkListModel = require('../linkedList/linked-list');

function mergeLists(listOne, listTwo) {

  const list = new linkListModel.LinkedList();
  let firstNode = listOne.head;
  let secondNode = listTwo.head;
  console.log(firstNode);
  console.log(secondNode);

  while(firstNode.next !== null && secondNode.next !== null) {
    console.log(list.append(firstNode.value));
    console.log(list.append(secondNode.value));
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }
  list.append(firstNode.value);
  list.append(secondNode.value);

  return list.head;
}

module.exports = { 
  mergeLists 
};