/**
 * List
 * Linked list implementation
 *
 * @constructor
 * @public
 */

function Node(element) {
    this.element = element;
    this.next = null;
}

function List() {

    this._head = new Node("head");
}

List.prototype._find = function find(item) {

    var currNode = this._head;
    while (currNode && currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
};

List.prototype._findPrevious = function _findPrevious(item) {

    var currNode = this._head;
    while (currNode &&
    		!(currNode.next === null) &&
        	currNode.next.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
};

List.prototype.insert = function insert(newElement, item) {

    var newNode = new Node(newElement);
    var current = this._find(item);
    
    // only if item exists in the list
    if(current) {
 		newNode.next = current.next;
    	current.next = newNode;   	
    }

};

List.prototype.remove = function remove(item) {

	var prevNode = this._findPrevious(item);

	if (!(prevNode.next === null)) {

		// next.next is to skip the item we want to remove
		prevNode.next = prevNode.next.next;
	}
};

List.prototype.display = function display(element) {

    var sReturn = "",
        currNode = this._head;

    while (!(currNode.next === null)) {

        sReturn += currNode.next.element + " ";

        console.log(currNode.next.element);
        currNode = currNode.next;
    }

    sReturn = sReturn.trim();
    return sReturn;
};
