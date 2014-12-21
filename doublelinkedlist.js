/**
 * Double Linked List
 * Double Linked list implementation
 *
 * @constructor
 * @public
 */

function Node(element) {

	this.element = element;
	this.next = null;
	this.previous = null;
}

function DoubleLinkedList() {

	this._head = new Node("head");
}

/**
 * Finds a Node in the list
 * 
 * @param  {String} item the node which to look for
 * @return {Node}      returns Node or null
 */
DoubleLinkedList.prototype._find = function find(item) {

	var currNode = this._head;
	while (currNode && currNode.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
};

DoubleLinkedList.prototype._findLast = function find() {

	var currNode = this._head;
	while (!(currNode.next === null)) {
		currNode = currNode.next;
	}
	return currNode;
};

DoubleLinkedList.prototype._findPrevious = function _findPrevious(item) {

	var currNode = this._head;
	while (currNode &&
		!(currNode.next === null) &&
		currNode.next.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
};

DoubleLinkedList.prototype.insert = function insert(newElement, item) {

	var current = this._find(item);
	
	// if we didn't find the element, current is null
	if (current === null) return;

	var newNode = new Node(newElement);

	newNode.next = current.next;
	newNode.previous = current;
	
	// this condition is true when the new node is not inserted
	// at the end of the list
	if (current.next) {
		current.next.previous = newNode;
	}

	current.next = newNode;

};

DoubleLinkedList.prototype.remove = function remove(item) {

	var currNode = this._find(item);

	// if the we didn't find the element it points to null
	if (currNode === null ) return;

	currNode.previous.next = currNode.next;
	currNode.next.previous = currNode.previous;

	currNode.next = null;
	currNode.previous = null;

};

DoubleLinkedList.prototype.display = function display() {

	var sReturn = "",
		currNode = this._head;

	var i = 0;

	if (currNode === null) return;

	while (!(currNode.next === null)) {

		sReturn += currNode.next.element + " ";

		console.log(currNode.next.element);
		currNode = currNode.next;

		// TODO - safety net to prevent endless loops
		// due to faulty implementations
		i++;
		if (i > 50) {
			console.log("ATTENTION!!! - display");
			break;
		}
	}

	sReturn = sReturn.trim();
	return sReturn;
};


DoubleLinkedList.prototype.displayReverse = function display() {

	var sReturn = "",
		currNode = this._findLast();

	var i = 0;

	if (currNode === null) return;

	while (currNode.previous !== null) {

		sReturn += currNode.element + " ";

		console.log(currNode.element);
		currNode = currNode.previous;

		// TODO - safety net to prevent endless loops
		// due to faulty implementations
		i++;
		if (i > 50) {
			console.log("ATTENTION!!! - display");
			break;
		}
	}

	sReturn = sReturn.trim();
	return sReturn;
};
