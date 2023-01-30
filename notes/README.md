# Code Explaination Line By Line

## JavaScript Spread Operator + Form Submit

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

## From a Child to Parent PART 01

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

## From a Child to Parent PART 02 w/ Object Properties

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

## From a Child to Parent PART 03 w/ useState

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

## `setAddContactForm({ ...addContactForm, name: e.target.value })` and `setContacts([...contacts, contact]);`

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

## Processing the Data w/ local storage

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

### useEffect

```javascript
const LOCAL_STORAGE_KEY = "contacts";

useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
```

This code is utilizing the useEffect hook in a React component. Here's a step-by-step explanation:

1. The first line `const LOCAL_STORAGE_KEY = "contacts"` declares a constant variable named `LOCAL_STORAGE_KEY` and assigns the string value `"contacts"` to it. This will be used as a key to store data in the local storage of the user's browser.

2. The `useEffect` hook is then called with a callback function inside it.

3. The callback function starts with `localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))`. This line takes the `contacts` data and converts it to a string format using `JSON.stringify(contacts)`. The resulting string is then saved to the user's browser local storage using `localStorage.setItem(LOCAL_STORAGE_KEY, ...)`. The `LOCAL_STORAGE_KEY` constant is used as the key to identify this piece of data in the local storage.

4. The second argument of `useEffect` is an array `[contacts]`. This tells the `useEffect` hook to only run the callback function inside it when the value of `contacts` changes.

In essence, this code uses `useEffect` to store the `contacts` data in the user's local storage every time the value of `contacts` changes.

Local Storage will look like this:

| key | value |
|---|---|
| contacts | [{"name":"john","email":"john@example.com"}] |


### JSON.parse vs JSON.stringify && getItem vs setItem

```javascript
useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}, [contacts]);

// AND

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);
```

The first code:

```javascript
useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}, [contacts]);
```

This `useEffect` hook retrieves, get or bring (something) back the data from the local storage using the key `LOCAL_STORAGE_KEY` and parses it from a string representation to a JavaScript object. The hook is triggered to run only when the `contacts` data changes, as specified by the dependency array `[contacts]`.

The second code:

```javascript
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);
```

This `useEffect` hook saves the `contacts` data to local storage using the key `LOCAL_STORAGE_KEY` by first converting the JavaScript object to a string representation using `JSON.stringify`. The hook is triggered to run only when the `contacts` data changes, as specified by the dependency array `[contacts]`.

By using the **`useEffect` hook, the component will handle storing and retrieving data from local storage automatically**, without the need to manually call these functions every time the component updates.

### getItem

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