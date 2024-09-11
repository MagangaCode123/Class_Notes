//A node simply consists of data and the adress  of where this data can be accessed

/**
 * ways of accessing elements inside our DOM tree
 * 1.QuerySelector() ---> it enables u to access any element in ur DOM
 * the catch is it only return the first element
 * document.querySelector('h2') 
 * to write our query selector simply pass in the name of the element inside the parentheses with a quotation
 */

/**
 * 2.getElementbyID()
 * Gets an element by ID
 * return the first element found in the case we have two or more elements withthe same ID
 */

/**
 * 3.querySelectorAll()
 * return all elements found
 */

/**
 * 4.getElementsByClassName()
 * returns all elements with the class name
 * 
 */

/**
 * 5.getElementsByTagName()
 * this one works the same as query selectory only difference is this returns all the elements
 * return an array of all elements
 */

//ATTRIBUTES
/**
 * to get an attribute
 * 1.get the element using queryselector or get element by ID
 * 2.element.getAttribute(name of Attribute eg class)
 */

//setAttribute() -> 2 parameters, 1st parameter -> name of the attribute,2nd parameter->'textFive'


//styling elements using selectors
/**
 * 1.get the element first using selectors
 * 2.accessing the styles properties using either dotNotation or bracketNotation
 * eg element.style.NameOfStyle = 'passInYourValue'
 */


//creating elements
/**
 * 1.first you create an element using document -> .createElement
 * 2.to add this to the dom we use .AppendChild()
 */

/**
 * 1.make your parent div using create element,store inside your parent variable
 * 2.make other divs using create element and store them inside your child variable
 * 3.to add the small divs to the big divs use appendChild
 */

//appendChild adds children to parents

//CHANGING TEXT INSIDE YOUR HTML CODE
//while using innerHTML it ignores the markup tags

//while using textContent and InnerText it includes the markup tags



