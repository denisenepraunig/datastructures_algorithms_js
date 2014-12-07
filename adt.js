/**
 * Constructor for new list
 *
 * @constructor
 * @public
 */

function List() {

	this._listSize = 0;
	this._pos = 0;
	this._dataStore = [];
}


/**
 * Adds an element to the list.
 *
 * @param {primitive} element - element to add to the list
 */
List.prototype.append = function append(element) {
	
	this._dataStore[this._listSize++] = element;
};

/**
 * Appends an array to the list
 *
 * @param {array} arr - array of elements
 */
List.prototype.appendArray = function append(arr) {
	
	for (var i = 0; i < arr.length; i++) {
		this.append(arr[i]);
	}
};


/**
 * Clears the datastore of the list and resets pos and list size.
 */
List.prototype.clear = function clear() {
	
	delete this._dataStore;
	this._dataStore = [];
	this._listSize = 0;
	this._pos = 0;
};

/**
 * Searches for an element in the list.
 *
 * @param {primitive} element - element to find in the list
 * @return {number} position of the element, -1 if not found
 */
List.prototype.find = function find(element) {
	
	for (var i = 0; i < this._dataStore.length; i++) {
		if (this._dataStore[i] === element) {
			return i;
		}
	}
	
	return -1;
};

/**
 * Removes an element in the list.
 *
 * @param {primitive} element - element to remove in the list
 * @return {boolean} true if element was removed, false if not
 */
List.prototype.remove = function remove (element) {
	
	var foundAt = this.find(element);

	if (foundAt > -1) {
		this._dataStore.splice(foundAt, 1);
		this._listSize--;
		return true;
	}

	return false;
};

/**
 * Length of the list.
 *
 * @return {number} length of the list
 */
List.prototype.getLength = function getLength() {

	return this._listSize;
};

/**
 * Convert the list to String
 *
 * @return {array} the datastore of the list
 */
List.prototype.toString = function toString() {
	
	return this._dataStore;
};

/**
 * Check if an element is in the list.
 *
 * @param {primitive} element - element to check if it is in the list
 * @return {boolean} true if element is in the list, false if not
 */
List.prototype.contains = function contains(element) {

	var foundAt = this.find(element);

	if (foundAt > -1) {
		return true;
	}

	return false;
};

/**
 * Moves the list pointer to the front
 *
 * @returns {number} the current position
 */
 List.prototype.front = function front() {

 	this._pos = 0;
 	return this._pos;
 };


/**
 * Moves the list pointer to the end
 *
 * @returns {number} the current position
 */
 List.prototype.end = function end() {

 	this._pos = this._listSize - 1;
 	return this._pos;
 };


/**
 * Moves the list pointer to the next element
 *
 * @returns {number} the current position
 */
 List.prototype.next = function next() {

 	if (this._pos < this._listSize - 1) {
 		this._pos++;
 	}
 	return this._pos;
 };

 /**
 * Moves the list pointer to the previous element
 *
 * @returns {number} the current position
 */
 List.prototype.prev = function prev() {

 	if (this._pos > 0) {
 		this._pos--;
 	}

 	return this._pos;
 };

 /**
 * Returns the current positon in the list
 *
 * @returns {number} the current position in the list
 */
 List.prototype.getPos = function getPos() {
 	
 	return this._pos;
 };

 /**
 * Moves the position to the defined location
 *
 * @params {number} the positon where to move the list pointer
 * @returns {number} the current position
 */
 List.prototype.moveTo = function moveTo(position) {
 	
 	this._pos = position;
 	return this._pos;
 };

 /**
 * Gets the element of the list where the list pointer points to
 *
 * @returns {primitve} the element at the current position
 */
 List.prototype.getElement = function getElement() {
 	
 	return this._dataStore[this._pos];
 };

 /**
 * Iterates through a list and applies the function
 * if no function is provided it will log to the console
 *
 * @returns {number} returns the number of iterations
 */
 List.prototype.iterate = function iterate(fnCallback) {

 	var numIterations = 0;

 	for (this.front(); this.getPos() < this.getLength(); this.next()) {
 		
 		console.log(this.getElement());
 		numIterations++;

 		
 		if(this.getPos() === this.getLength()-1) break; // IMPORTANT!!!
 	}
 	
 	return numIterations;
 }; 

 List.prototype.iterateBackwards = function iterateBackwards() {

 	var numIterations = 0;

 	for (this.end(); this.getPos() >= 0; this.prev()) {
 		
 		console.log(this.getElement());
 		numIterations++;

 		if(this.getPos() === 0) break; // IMPORTANT!!!
 	}
 	
 	return numIterations;
 }; 

