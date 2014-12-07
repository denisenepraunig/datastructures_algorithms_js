Data Structures and Algorithms JavaScript
===

All the examples are from the book "Data Structures &  Algorithms with JavaScript" by Michael McMillan (O'Reilly) published 2014. 

### Lists - adt.js
A list can be used as for a todo list.
ADT = Abstract Data Type, a list has those basic operations:
 - append - appends an alement at the end of the list
 - remove - removes an element from the list
 - previous - move to the previouse element
 - next - move to the next element
 - front - move list position at the beginning
 - end - move the list position at the end
 - moveTo - move the list positon to a certain position
 - clear - clears the whole list
 - getElement - get the element at the current postion
 - getLength - get the number of elements in the list
 - getPos - get the current position
 - find - find out the postion of an element
 - contains - check if an element ins in the list
 - insert - TODO!!!

### Stack - stack.js
Whith a stack you only operate with the last element of a stack. A stack can be used for checking parlindromes (parlindrome.html), converting numbers to a certain base (numconverter.html) or simulation a recursive operation (recurstionstack.html). A stack has those basic operations and is implemented as LIFO (last in, first out)
- push - pushes an element at the end of the stack
- pop - returns and removes the last element of the stack
- peek - get the value of the last element of the stack
- clear - clears the stack
- getLength - get the number of elements in the stack

### Queue - queue.js
A queue is a data structure where data is inserted at the end and removed from the front. It is the FIFO principle: first-in, first-out. It can be sued as a print spooler or people standing in the line at the supermarket. Basic queue operations are:
- enqueue - inserts an element at the end of the queue
- dequeue - removes the first element of the queue
- front - look at the value of the first element (without removing)
- end - look at the value of the last element (without removing)
- clear - clears the whole queue
- isEmpty - is the queue empty


