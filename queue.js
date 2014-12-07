/**
 * Constructor for new Queue
 * Array-based implementation
 *
 * @constructor
 * @public
 */

function Queue() {

    this._dataStore = [];
}

/**
 * Inserts an element at the end of the queue
 * @param  {primitive} element - the element to be added
 */
Queue.prototype.enqueue = function enqueue(element) {

    this._dataStore.push(element);
};

/**
 * Removes the first element of the queue
 * @returns  {primitive} element - the removed element
 */
Queue.prototype.dequeue = function dequeue() {

    return this._dataStore.shift();
};

/**
 * Retrieves the value of the first element of the queue
 * @returns  {primitive} element - the value of element
 */
Queue.prototype.front = function front() {

    return this._dataStore[0];
};

/**
 * Retrieves the value of the last element of the queue
 * @returns  {primitive} element - the value of element
 */
Queue.prototype.end = function end() {

    return this._dataStore[this._dataStore.length - 1];
};

/**
 * Get the number of elements in the queue
 * @return {number} length of the queue
 */
Queue.prototype.getLength = function getLength() {

    return this._dataStore.length;
};

/**
 * Is the queue empty
 * @return {Boolean} is the queue empty
 */
Queue.prototype.isEmpty = function isEmpty() {

    // !!!this._dataStore.length also possible ^
    return !Boolean(this._dataStore.length);
};

/**
 * Clears the queue
 */
Queue.prototype.clear = function clear() {

    delete this._dataStore;
    this._dataStore = [];
};

Queue.prototype.toString = function toString() {

    var sQueue = "";

    for (var i = 0; i < this._dataStore.length; i++) {

        sQueue += this._dataStore[i];

        if (i !== this._dataStore.length - 1) {
            sQueue += " ";
        }

    }
    return sQueue;
};
