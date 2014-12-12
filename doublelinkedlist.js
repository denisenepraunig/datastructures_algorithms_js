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

DoubleLinkedList.prototype._find = function find(item) {

	var currNode = this._head;
	while (currNode && currNode.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
};

DoubleLinkedList.prototype._findLast = function find() {

	var currNode = this._head;
	while (currNode.next !== null) {
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

	var newNode = new Node(newElement);
	var current = this._find(item);

	// only if item exists in the DoubleLinkedlist
	if (current) {
		newNode.next = current.next;
		newNode.previous = current;
		current.next = newNode;
	}

};

DoubleLinkedList.prototype.remove = function remove(item) {

	var currNode = this._find(item);

	if (currNode.next !== null) {

		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;

		currNode.next = null;
		currNode.previous = null;
	}

};

DoubleLinkedList.prototype.display = function display() {

	var sReturn = "",
		currNode = this._head;

	var i = 0;

	while (currNode.next !== null) {

		sReturn += currNode.next.element + " ";

		console.log(currNode.next.element);
		currNode = currNode.next;
		i++;
		if (i > 10) break;
	}

	sReturn = sReturn.trim();
	return sReturn;
};


DoubleLinkedList.prototype.displayReverse = function display() {

	var sReturn = "",
		currNode = this._findLast();

	var i = 0;

	while (currNode.previous !== null) {

		sReturn += currNode.element + " ";

		console.log(currNode.element);
		currNode = currNode.previous;

		i++;
		if (i > 10) break;
	}

	sReturn = sReturn.trim();
	return sReturn;
};
