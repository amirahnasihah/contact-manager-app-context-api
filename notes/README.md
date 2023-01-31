# Code Explaination Line By Line

- [Code Explaination Line By Line](#code-explaination-line-by-line)
  - [Add Function](#add-function)
    - [JavaScript Spread Operator + Form Submit](#javascript-spread-operator--form-submit)
    - [From a Child to Parent PART 01](#from-a-child-to-parent-part-01)
    - [From a Child to Parent PART 02 w/ Object Properties](#from-a-child-to-parent-part-02-w-object-properties)
    - [From a Child to Parent PART 03 w/ useState](#from-a-child-to-parent-part-03-w-usestate)
  - [Add Contact Form between Array and Object](#add-contact-form-between-array-and-object)
  - [Processing Data w/ local storage](#processing-data-w-local-storage)
    - [Save Data in local storage w/ useEffect](#save-data-in-local-storage-w-useeffect)
    - [Get the Data Back - getItem vs setItem || parse vs stringify](#get-the-data-back---getitem-vs-setitem--parse-vs-stringify)
    - [Retrieved Data w/ JSON.parse and getItem](#retrieved-data-w-jsonparse-and-getitem)
  - [Create Unique ID w/ `uuidv4`](#create-unique-id-w-uuidv4)
  - [Differences when refreshing the browser, Data not loses](#differences-when-refreshing-the-browser-data-not-loses)
  - [Delete Function](#delete-function)
    - [Different approaches to delete](#different-approaches-to-delete)
    - [Delete Function Approach 2](#delete-function-approach-2)
    - [Passing Functions Through Multiple Props w/ delete function](#passing-functions-through-multiple-props-w-delete-function)
    - [The onClick Delete Button Passed Correctly](#the-onclick-delete-button-passed-correctly)
- [React Router](#react-router)
  - [Configuring The Router](#configuring-the-router)
  - [Defining Routes](#defining-routes)

## Add Function

### JavaScript Spread Operator + Form Submit

```jsx
const contactForm = {
    name: "",
    email: "",
  };

const [addContactForm, setAddContactForm] = useState(contactForm);


value={addContactForm.name}
onChange={ (e) =>
            setAddContactForm({ ...addContactForm, name: e.target.value })
         }
```

This code is using a React hook called `useState` to **update the `addContactForm` object with the current value of an input element** whenever the value of that input element changes. From empty array `" "` to some text input.

The `...addContactForm` is a JavaScript spread operator, it makes a copy of all the properties, the `name` and `email` of the `addContactForm` object and add the new property `name: e.target.value` to it, which we target for the `name` property to update/add new value or current value.

Here's what each line of code does:

1. `value={addContactForm.name}` - This line sets the value of the input element to the current value of the `name` property of the `addContactForm` object. This is done so that the input element is initialized with the current value of the name property. Set from an empty array `" "` to `John`.

2. `onChange={(e) =>` - This is the start of an event handler function that will be called whenever the value of the input element changes. The **`e` parameter is an event object that contains information about the event**.

3. `setAddContactForm({ ...addContactForm, name: e.target.value });` - This line is using **the `setAddContactForm` function to update the `addContactForm` object**. The `...addContactForm` is a **spread operator which copies all properties of the `addContactForm` object**, and the `name: e.target.value` is updating the `name` property of the `addContactForm` object with the current value of the input element `(e.target.value)`. Update the name property from its initial value of an empty array `" "` to `John`.

4. `}}` - This is the end of the event handler function.

So, the **spread operator is used to make a copy of all the existing properties of `addContactForm`, and then the new property `name: e.target.value` is added to it**.

Then the **setAddContactForm function updates the addContactForm object with this new object**. This allows the **previous data in the addContactForm object to remain unchanged and only the name field is updated** with the current input value.

In addition, **`e.target.value` is the current value of the input element**, it's getting the value of the input element every time the input is changed, that's why it's able to update the input value dynamically.

### From a Child to Parent PART 01

Pass something from a child to parent we can actually use the prop. can pass a function as prop.

There are several ways to pass data from a child component to a parent component in React. Some of the most common methods include:

1. Callback functions: You can pass a callback function as a prop from the parent component to the child component. The child component can then call this function and pass it any data it wants to pass to the parent component.

```jsx
// In the parent component:
function Parent() {
  const handleDataFromChild = (data) => {
    console.log(data);
  }

  return (
    <Child handleData={handleDataFromChild} />
  )
}

// In the child component:
function Child({handleData}) {
  const handleClick = () => {
    handleData("Hello from child!");
  }

  return (
    <button onClick={handleClick}>Pass data to parent</button>
  )
}
```

2. Using the useContext hook: If you want to pass data between components that are not directly related, you can use the useContext hook to create a context that both the parent and child components can access. The child component can update the context, and the parent component can read the updated value.

```jsx
// Create the context
const MyContext = React.createContext();

// In the parent component:
function Parent() {
  const value = useContext(MyContext);

  return (
    <div>
      <Child />
      <p>Data from child: {value}</p>
    </div>
  )
}

// In the child component:
function Child() {
  const {setValue} = useContext(MyContext);

  const handleClick = () => {
    setValue("Hello from child!");
  }

  return (
    <button onClick={handleClick}>Pass data to parent</button>
  )
}
```

3. Using useState and useEffect hooks: another way to pass data between components is to use the useState and useEffect hooks. The child component can update the state, and the parent component can read the updated value.

```jsx
// In the parent component:
function Parent() {
  const [dataFromChild, setDataFromChild] = useState();

  return (
    <div>
      <Child setData={setDataFromChild} />
      <p>Data from child: {dataFromChild}</p>
    </div>
  )
}

// In the child component:
function Child({setData}) {
  const handleClick = () => {
    setData("Hello from child!");
  }

  return (
    <button onClick={handleClick}>Pass data to parent</button>
  )
}
```

All of the above methods can be used to pass data from a child to a parent component in React. The best method for your use case will depend on the specific requirements of your application.

### From a Child to Parent PART 02 w/ Object Properties

This code is setting up a form that allows a user to add a contact with a name and email.

```jsx
const contactForm = {
  name: "",
  email: "",
};

const [addContactForm, setAddContactForm] = useState(contactForm);

const add = (e) => {
  e.preventDefault();
  if (addContactForm.name === "" || addContactForm.email === "") {
    alert("All the fields are required");
    return;
  }
  addContactHandler({ ...addContactForm });
  setAddContactForm({ name: "", email: "" });
  console.log("addContactForm", addContactForm);
};
```

At Concole:

`addContactForm -> {name: 'jane', email: 'jane@example.com'}        AddContact.js:22 `

1. The first line creates an object called `contactForm` with properties of `name` and `email`, both set as empty strings.

2. `const [addContactForm, setAddContactForm] = useState(contactForm);` is using the `useState` hook to create a state variable called `addContactForm` and a function called `setAddContactForm` that updates that state. The initial value of `addContactForm` is set to the `contactForm` object created in the first line.

3. `const add = (e) => {` is the `add` function, defined as a callback for when the form is submitted.

4. Within the `add` function, `e.preventDefault()` is called to prevent the default behavior of the form submit.

5. `if (addContactForm.name === "" || addContactForm.email === "") {` is checks if either the `name` or `email` properties of the `addContactForm` state are empty strings. If either are true, it will display an `alert` message saying "All the fields are required" and exit the function with the `return` statement.

6. `addContactHandler({ ...addContactForm });` happens if both `name` and `email` have values, it will call the `addContactHandler` function, passing in the `addContactForm` object using the spread operator `({ ...addContactForm })` to pass the properties individually.

7. After that, `setAddContactForm({ name: "", email: "" });` it will use the `setAddContactForm` function to update the state and reset the form fields by setting the `name` and `email` properties back to empty strings.

8. Finally, it will log the `addContactForm` state to the console to check the current state.

This approach is used to handle the form fields within a component's state, allowing for easy updates and validation of the form fields before passing the information to a parent component or external function for handling. The `useState` hook allows for easy management of the state within the component.

### From a Child to Parent PART 03 w/ useState

Other example of ways using useState hook:

```jsx
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const { addContactHandler } = useContactsCrud();
const navigate = useNavigate();

const add = (e) => {
  e.preventDefault();
  if (name === "" || email === "") {
    alert("All fields are required!");
    return;
  }
  addContactHandler({ name, email });
  setName("");
  setEmail("");
  navigate("/");
};
```

This code is creating a form for adding a contact, which has two fields: "name" and "email". The component is using the useState hook to manage the state of the form.

1. `const contactForm = { name: "", email: "" }` is creating an object literal with two properties, name and email and both of them are initialized as empty strings.

2. `const [addContactForm, setAddContactForm] = useState(contactForm);` is using the `useState` hook to create a state variable called `addContactForm`, and a function to update it called `setAddContactForm`. It is initializing `addContactForm` with the `contactForm` object that we created in the first line.

3. `const add = (e) => {` is defining a function called `add` that takes an event object as an argument.

4. `e.preventDefault();` is calling the preventDefault method on the event object to prevent the default behavior of the form, which is to refresh the page.

5. `if (addContactForm.name === "" || addContactForm.email === "") {` is checking if either of the form fields are empty. If either of them are, it will show an alert message saying "All fields are required!" and then return to stop the function from running any further.

6. `addContactHandler({ ...addContactForm });` is calling the addContactHandler function and passing in the addContactForm object, with the spread operator (`...`) used to make a copy of the object and prevent it from being modified by reference.

7. `setName("");` and `setEmail("");` are clearing the name and email fields in the form.

8. `navigate("/");` is navigating to the root of the app.

In this case, since the state is an object literal, we use the spread operator to create a copy of the state, thus we can pass it to the `addContactHandler` function without modifying the original state. This approach ensures that the component's state remains consistent and that any changes made to the form fields are reflected in the component's state. Additionally, it also allows for easy updating and tracking of the form fields.

## Add Contact Form between Array and Object


`setAddContactForm({ ...addContactForm, name: e.target.value })` and `setContacts([...contacts, contact]);`

The difference between the two is that the **first line of code updates an object**, while the **second line of code updates an array**. That's why the first line of code is wrapped in curly braces (`{}`) and the second line of code is wrapped in square brackets (`[]`).

1. `setAddContactForm({ ...addContactForm, name: e.target.value })`

```jsx
setAddContactForm({ ...addContactForm, name: e.target.value })
```

`setAddContactForm({ ...addContactForm, name: e.target.value })` is a line of code that **updates the state of an object** called `addContactForm`. It starts with the spread operator (`...`), which allows you to **spread the properties of the current `addContactForm` object into a new object**. Then, it sets a new property `name` to `e.target.value`, which is the value of the input that triggered the event.

2. `setContacts([...contacts, contact]);`

This line of code updates the value of the contacts state in a React component.

```jsx
setContacts([...contacts, contact]);
```

`setContacts([...contacts, contact])` is a line of code that **updates the state of an array** called `contacts`. The spread operator (`...`) is used to **spread the elements of the current `contacts` array into a new array**. Finally, it **adds the `contact` object to the new array**, which updates the state of contacts.

- `[...contacts, contact]` creates a new array by using the spread operator to spread the values of the current `contacts` **array**, and adding the `contact` **object** to the end of it.

- `setContacts` is the hook that updates the value of the `contacts` state.

```jsx
setContacts([...contacts, contact]); ✅

// OR

setContacts([...contacts], { contact });
```

The difference between the two code snippets is in the way the new data is being added to the `contacts` state.

✅`setContacts([...contacts, contact]);` is using the spread operator (`...`) to create a new array and add the new `contact` data to it. The new data is being added at the end of the array, using the (`,`) operator.

🔍`setContacts([...contacts], { contact });` is using the spread operator (`...`) to create a new array, but the new `contact` data is being added as an object inside another array, using the (`,`) operator.

The **first approach is the correct one and is more commonly** used in React, since the **state is usually an array of objects and you want to add a new object to it**, instead of an object inside another array.

```jsx
setContacts([...contacts, { id: uuidv4(), ...contact }]);
```

The code sets the state of the `contacts` by updating the current value of `contacts` using the spread operator (`...`) and then adding a new object to it with properties `id` and `contact`.

`uuidv4()` generates a universally unique identifier (UUID), and it is used to generate a unique id for the new object that's being added to the `contacts` state.

The new object has the following properties:

- `id`: a unique identifier generated using `uuidv4()`

- `...contact`: all properties from the `contact` object are spread into this new object.

This approach allows the code to keep track of all the existing contacts while adding a new contact to the list with a unique identifier.

## Processing Data w/ local storage

Using the local storage have to use the useEffect hook.

The purpose of `useEffect` is to allow you to synchronize a component with an external system. For example, you might use an effect to fetch data from an API, to listen for changes in the browser's window size, or to set up a subscription to some data.

```javascript
useEffect(() => {
  // code to run here
  return () => {
    // cleanup code here (optional)
  };
}, [dependencies]);
```

Here's a step-by-step explanation of what's happening:

1. The useEffect Hook is called.

2. The first argument is a function that contains the code to run in response to a change. This is often called an "effect."

3. The second argument is an array of dependencies. The dependencies are variables that the effect depends on. If any of these variables change, the effect will re-run. If the array is empty, the effect will only run on the first render and not re-run after that.

4. When the component is first rendered, the effect will run.

5. If any of the dependencies change, the effect will re-run.

6. If the component is removed from the DOM (i.e., it's unmounted), the optional cleanup function will run. This is a way to clean up any side effects created by the effect.

### Save Data in local storage w/ useEffect

```javascript
const LOCAL_STORAGE_KEY = "contacts";

useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
```

This code is utilizing the `useEffect` hook in a React component. Here's a step-by-step explanation:

1. The first line `const LOCAL_STORAGE_KEY = "contacts"` declares a constant variable named `LOCAL_STORAGE_KEY` and assigns the string value `"contacts"` to it. This will be used as a key to store data in the local storage of the user's browser.

2. The `useEffect` hook is then called with a callback function inside it.

3. The callback function starts with `localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))`. This line takes the `contacts` data and converts it to a string format using `JSON.stringify(contacts)`. The resulting string is then saved to the user's browser local storage using `localStorage.setItem(LOCAL_STORAGE_KEY, ...)`. The `LOCAL_STORAGE_KEY` constant is used as the key to identify this piece of data in the local storage.

4. The second argument of `useEffect` is an array `[contacts]`. This tells the `useEffect` hook to only run the callback function inside it when the value of `contacts` changes.

In essence, this code uses `useEffect` to store the `contacts` data in the user's local storage every time the value of `contacts` changes.

Local Storage will look like this:

| key | value |
|---|---|
| contacts | [{"name":"john","email":"john@example.com"}] |


### Get the Data Back - getItem vs setItem || parse vs stringify

JSON.parse vs JSON.stringify && getItem vs setItem

```javascript
useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}, [contacts]);

// AND

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);
```

1. The first code:

```javascript
useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}, [contacts]);
```

This `useEffect` hook retrieves/get/bring (`something`) back the data from the local storage using the key `LOCAL_STORAGE_KEY` and parses it from a string representation to a JavaScript object. The hook is triggered to run only when the `contacts` data changes, as specified by the dependency array `[contacts]`.

2. The second code:

```javascript
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);
```

This `useEffect` hook saves the `contacts` data to local storage using the key `LOCAL_STORAGE_KEY` by first converting the JavaScript object to a string representation using `JSON.stringify`. The hook is triggered to run only when the `contacts` data changes, as specified by the dependency array `[contacts]`.

By using the **`useEffect` hook, the component will handle storing and retrieving data from local storage automatically**, without the need to manually call these functions every time the component updates.

### Retrieved Data w/ JSON.parse and getItem

```javascript
useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
```

`if (retrieveContacts) setContacts(retrieveContacts);` is:

The code checks if the value of the `retrieveContacts` is truthy (not `null`, `undefined`, `0`, `false`, `""`, or `NaN`), then it sets the state `contacts` to the value of `retrieveContacts`.

This approach is commonly used to update the state based on some condition. In this case, it's checking whether the contacts have been retrieved from local storage and if so, it's setting the state `contacts` to the retrieved contacts.

## Create Unique ID w/ `uuidv4`

Focus on the code line `setContacts([...contacts, { id: uuidv4(), ...contact }]); `.

```javascript
const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id: uuidv4(), ...contact }]);
    };
```

This code is a JavaScript function named `addContactHandler`. It takes one argument `contact` which is an object containing information about a contact (for example, `name` and `email`).

Here's what the code does, line by line:

1. `console.log(contact)` is the code logs the `contact` object to the console, so that the programmer can inspect its values.

2. `setContacts([...contacts, { id: uuidv4(), ...contact }])` is the function updates the state of the `contacts` using the `setContacts` hook. The `contacts` state is an array of objects representing all the contacts.

The code is spreading the existing `contacts` state using the spread operator (`...contacts`) and then adding a new object to the end of the array using the object literal syntax. This new object contains the `contact` object that was passed as an argument to the `addContactHandler` function, and also contains a unique identifier `id` generated using the `uuidv4` function.

In other words, the `addContactHandler` function is used to add a new contact to the list of existing contacts by updating the `contacts` state with a new contact object that includes the unique identifier `id`.

## Differences when refreshing the browser, Data not loses

```javascript
const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

// OR

useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
```

1. The difference between the two code snippets is that in **the first one, you are setting the initial value of the `contacts` state using the data stored in the local storage.** When the component is re-rendered, the value of `contacts` will be kept and **not lost, as it's set to the data from local storage at the beginning.**

2. In the **second code snippet, using the `useEffect` hook to retrieve the data from local storage every time the component is re-rendered.** The component only retrieves the data once, at the first render, since the second argument of the `useEffect` hook is an empty array `[]`. This means that the hook will only run on mount (i.e. the first render) and not re-run after that. Hence, when the component is refreshed, the `useEffect` hook is not triggered and the `contacts` state is not updated from the local storage, leading to data loss.

## Delete Function

To make a delete function in React, you can define a function that **takes the `id` of the contact to be deleted as an argument**, find the index of that contact in the `contacts` array, and then use the `setContacts` function to create a new array with the contact removed. Here's an example:

```javascript
const deleteContact = (id) => {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
};
```

This function first uses the `Array.prototype.findIndex` method to find the index of the contact with the given `id`. If the index is found, it creates a new array `newContacts` with the same elements as the original `contacts` array. Then, it uses the `Array.prototype.splice` method to remove the element at the specified index. Finally, it calls the `setContacts` function to update the state with the new array.

### Different approaches to delete

What's the differences between this two approach. Why it difference?

```javascript
// APPROACH 1 🔍
const deleteContact = (id) => {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
};

// APPROACH 2 ✅
const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });

  setContacts(newContactList);
};
```

Both approaches serve the same purpose, which is to remove a specific contact from a list of contacts.

**Approach 1:**

1. Declares a function deleteContact which takes in an id as an argument

2. The function uses the Array.prototype.findIndex method to find the index of the contact with the specified id

3. If the index is not equal to -1, meaning the contact is found in the list, it creates a new array newContacts which is a copy of the contacts array

4. Then it uses the Array.prototype.splice method to remove the found contact from the new array

5. Finally, it calls the setContacts function to update the state with the new array newContacts

**Approach 2:**

1. Declares a function removeContactHandler which takes in an id as an argument

2. The function uses the Array.prototype.filter method to create a new array newContactList which only contains the contacts with an id that is not equal to the specified id

3. Finally, it calls the setContacts function to update the state with the new array newContactList

Both approaches will result in removing the specified contact from the list, but approach 2 is more concise and preferred in most cases because it is easier to understand and less prone to bugs.

### Delete Function Approach 2

```javascript
const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });

  setContacts(newContactList);
};
```

This is a function deleteContact in JavaScript which is used to delete a contact from a list of contacts.

Line by line:

1. `const deleteContact = (id)`: This line declares a function named `deleteContact` and it takes one argument `id` which is the identifier of the contact that needs to be deleted.

2. `const newContacts = contacts.filter((contact) => {`: This line creates a new constant named `newContacts` and assigns the value of `contacts` filtered based on a condition.

3. `return contact.id !== id;`: This line defines the condition that is used to filter the `contacts` array. The filter returns a new array where `contact.id` is not equal to the passed `id`. This means that the contacts whose `id` matches the passed `id` will be excluded from the new array `newContacts`.

4. `setContacts(newContacts);`: This line updates the state of `contacts` by calling the `setContacts` function and passing the newly created `newContacts` array. The `setContacts` function updates the `contacts` state and the UI will be re-rendered with the updated data.

Overall, the deleteContact function filters the contacts array by excluding the contact with the passed id and updates the contacts state with the newly created array, which results in deleting a contact from the list.

### Passing Functions Through Multiple Props w/ delete function

> Passing the click handler from the inner child to the its parent and then from parent to its parent. which is the contact card it will give the id to the contact list from the contact list is going to give the id to the app.

Passing functions from a child component to its parent and then from the parent to its grandparent can be done through multiple props.

To pass a delete function from a child component to its parent and then from the parent to its grandparent, you can pass the function down through multiple props. Here is an example:

1. Create a delete function in the grandparent component:

```javascript
const deleteHandler = (id) => {
  // logic to delete the item with id
}
```

2. Pass the delete function to the parent component through props:

```javascript
<ParentComponent deleteHandler={deleteHandler} />
```

3. Pass the delete function to the child component through props:

```javascript
const ParentComponent = (props) => {
  return (
    <ChildComponent deleteHandler={props.deleteHandler} />
  );
}
```

4. Use the delete function in the child component:

```javascript
const ChildComponent = (props) => {
  const handleDelete = () => {
    props.deleteHandler(id);
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}
```

This way, the delete function is passed from the grandparent to the child component through the parent component.

### The onClick Delete Button Passed Correctly

The second and third code do not work because they don't correctly pass the `deleteHandler` function to the `onClick` event.

```javascript
// First code✅
onClick={() => deleteHandler(id)}

// Second code❌
onClick={deleteHandler}
// console -> "deleteHandler" -> SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: 

// Third code❌
onClick={deleteHandler(id)}
// console -> "deleteHandler" -> give the unique id of each list and remove all with error warning
```

1. The first code works because it's **calling a function with an argument (`id`)** when the `DeleteIcon` is clicked. The function, `deleteHandler` is called with the `id` as a parameter and the logic inside that function is executed. This ensures that the correct `id` is passed to the `deleteHandler` function when it's called.

2. The second code doesn't work because it's **calling the `deleteHandler` function without any parameters**, missing the argument `id`. So, if the `deleteHandler` function requires a specific parameter, it won't receive it and could result in an error or unexpected behavior.

3. The third code also doesn't work because it's calling the `deleteHandler` function immediately, instead of passing it as a reference to the onClick event. This means that the deleteHandler function will be called immediately, rather than when the DeleteIcon is clicked.

It's important to **understand the difference between passing a reference to a function and, calling a function.**

In the **first** code, `() => deleteHandler(id)` creates a new anonymous function that calls `deleteHandler` with `id` as an argument. In the **second** code, `deleteHandler` is passed as a reference and will be executed directly when the `DeleteIcon` is clicked. The third code calls the `deleteHandler` function immediately.

# React Router

React Router DOM is a library for routing in React applications. It allows developers to declaratively manage navigation within a React application by mapping components to different URLs. When a URL is matched, React Router DOM renders the associated component, making it easy to create a single-page application with multiple views.

React Router DOM provides several components for defining routes and navigation, including:

- `<BrowserRouter>`: A high-level component that wraps around the application and provides routing context.
- `<Route>`: A component that specifies the component to render when a URL matches its specified path.
- `<Link>`: A component that provides a clickable element for navigating to a different route.
- `<Switch>`: A component that renders the first child `<Route>` that matches the current URL.

React Router DOM also provides several features for customizing routing, such as query parameters, URL parameters, and programmatic navigation.

3 things you need to do in order to use React Router.

1. Setup your router
2. Define your routes
3. Handle navigation

Read here 👉 [Ultimate React Router v6 Guide](https://blog.webdevsimplified.com/2022-07/react-router/)

## Configuring The Router

Import your router in the `index.js` page of your application and it will wrap your `App` component. The router works just like a context in React and provides all the necessary information to your application so you can do routing and use all the custom hooks from React Router.

**Example: index.js**

```javascript
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

## Defining Routes

Commonly done at the top level of your application, such as in the App component, but can be done anywhere you want.

**Example: App.js**

```javascript
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  )
}
```