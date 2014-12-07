/**
 * Constructor for new Stack
 *
 * @constructor
 * @public
 */

function Stack() {
    this._dataStore = [];
    this._top = 0;
}

/**
 * Pushes an element to the stack
 *
 * @param  {primitve} element pushes an element to the stack
 */
Stack.prototype.push = function push(element) {

    // first access with top, then increment
    this._dataStore[this._top++] = element;
};

/**
 * Returns the last element from the stack
 * @return {primitve} the last element from the stack
 */
Stack.prototype.pop = function pop() {

    // first decrement, then access
    // don't further decrease when already 0
    
    if(this._top > 0) {
    	return this._dataStore[--this._top];    	
    }

    return undefined;
};

/**
 * Returns the value of the last element from the stack
 * @return {primitive} value of the last element
 */
Stack.prototype.peek = function peek() {

    return this._dataStore[this._top - 1];
};

/**
 * Get the lengths of the stack
 * @return {primitve} the length of the stack
 */
Stack.prototype.getLength = function getLength() {

    return this._top;
};

/**
 * clears the stack
 */
Stack.prototype.clear = function clear() {

	// in the book they don't clear the _dataStore
	// but it feels wront when not doing it
    delete this._dataStore;
    this._dataStore = [];

    this._top = 0;
};
