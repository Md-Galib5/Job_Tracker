### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:getElementById selects one element by its unique id and return element which is contains by the id.
getElementsByClassName can selects multiple elements by class name and returns a HTMLCollection.
querySelector selects the first matching element while querySelectorAll select all matches elements using CSS selectors and returns NodeList.

### 2. How do you create and insert a new element into the DOM?
Answer: We can create a new element using document.createElement() and then add content or attributes into it.After that,We can insert the new element into DOM by using appendChild(),append().

### 3. What is Event Bubbling? And how does it work?
Answer:Event Bubbling is a process in the DOM where an event starts from the target element and then moveing up through its parent elements,just like bubbles always moving upward.When an event happend on a child element,it first runs on that element and then moving or bubbles to its parent elements unless it is stopped.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique in JavaScript where we can write one event listener for a parent element.We dont need to add event listeners to multiple child elements.The parent handles events for its children using event bubbling.
It is useful because it improves performance,reduces memory usage and automatically works for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:PreventDefault() prevents the default action of an element.
And StopPropagation() stops event bubbling or capturing.