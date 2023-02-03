# React Router DOM Version 6

## Upgrade to version 6

1. Open `package.json` -> type the version number -> open terminal: `npm install`

# Context API

- Context API in React is a tool for sharing data.
- It allows you to store data in a single place, called a `"context"`.
- Any component in your application can access and use this data.
- You don't need to pass the data through props from one component to another.
- It's like a global store for your data.
- The data can be easily updated and accessed by any component.
- Using Context API makes it easier to manage the data flow in your application.
- You only need to update the data in one place, instead of updating it in multiple components.

## Basic Setup Context API for Contact Manager App

```javascript
import { createContext } from "react";

const contactsCrudContext = createContext();

export function contactsCrudContextProvider({ children }) {
  const value = {};

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}
```

- This code is using the React library to create a Context API.
- It starts by importing the `createContext` function from the `react` library.
- A context called `contactsCrudContext` is created using `createContext`.
- There is a function named `contactsCrudContextProvider` that takes in `children` as a parameter.
- Inside the function, an empty object `value` is created.
- The function returns a component created using the `contactsCrudContext.Provider` and passes `value` as the `value` prop.
- The `children` passed to the function are wrapped inside the `contactsCrudContext.Provider` component.
- This context can be used to share data between different components in your application.

**5w 1h questions:**

1. What is this code for?: This code creates a context in React for sharing data between components.

2. Why is `createContext` imported?: `createContext` is **imported to create a context that can be used to store and share data between components**.

3. What is `contactsCrudContext`?: `contactsCrudContext` is **the created context**.

4. Why is the function `contactsCrudContextProvider` needed?: The `contactsCrudContextProvider` function is **used to provide the data stored in the context to components that need it.**

5. What does the `contactsCrudContextProvider` function do?
The `contactsCrudContextProvider` function takes in a component's children as a parameter, creates an empty object `value`, and returns a component that wraps the children with the **contactsCrudContext.Provider** component and passes `value` as the `value` prop.

6. What is the purpose of the `value` object?
The `value` object is used **to store the data that will be shared** between components using the context.

7. How does this code work to share data between components?
Components can access the data stored in the context by using the `useContext` hook and providing the context as an argument. The data is made available to the components by wrapping them inside the `contactsCrudContextProvider` function, which provides the context data using the `contactsCrudContext.Provider` component.

8. `children` is a term used in React to refer to the components that are nested inside a parent component. It's a way to specify which components should be rendered as the children of a particular component.

### createContext()

- `createContext` is **imported to create a context that can be used to store and share data between components**.

### Access the value of the context provider w/ `useContext()`

In order to access the value of the context provider, you need to use the useContext hook in your component. Here is an example:

```javascript
import React, { useContext } from "react";
import { contactsCrudContext } from "./ContextFile";

function MyComponent() {
  const value = useContext(contactsCrudContext);

  return (
    <div>
      {/* Use the value from the context */}
    </div>
  );
}
```

In this example, `useContext` is used to get the value of the context. The `contactsCrudContext` is passed as an argument to `useContext`, which returns the value stored in the context. The value can then be used inside the component as needed.

Note that the context must be created and provided to the component tree using the `contactsCrudContextProvider` before it can be accessed using `useContext`.

#### useContext

```javascript
import { useContext } from "react";
```

1. What is this line for?: This line imports the necessary components from the React library to access the context.

2. Why is `React` imported?: `React` is imported because it is a required part of any React component.

3. Why is `useContext` imported?: `useContext` is imported because it is the hook that is used to access the value of the context provider.

```javascript
import { contactsCrudContext } from "./ContextFile";
```

1. What is this line for?: This line imports the `contactsCrudContext` that was created in the context file.

2. Why is `contactsCrudContext` imported?: `contactsCrudContext` is imported because it is used to access the value stored in the context.

```javascript
function MyComponent() {
```

1. What is this line for?: This line defines a new functional component called `MyComponent`.

2. Why is a component needed here?: A component is needed here because this is where the context value will be accessed and used.

```javascript
const value = useContext(contactsCrudContext);
```

1. What is this line for?: This line gets the value stored in the `contactsCrudContext` using the `useContext` hook.

2. Why is `useContext` used?: `useContext` is used to get the value stored in the context.

3. What is `contactsCrudContext` used for?: `contactsCrudContext` is passed as an argument to `useContext` to specify which context should be accessed.

4. What is `value` used for?: `value` is used to store the value that was returned from the `useContext` hook. This value can be used in the component to access the data stored in the context.

## Basic Setup Extra Context API

```javascript
import { createContext, useContext } from "react";

const contactsCrudContext = createContext();

export function contactsCrudContextProvider({ children }) {
  const value = {};

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
```

`export function useContactsCrud() {  return useContext(contactsCrudContext); }`

This code exports a function called useContactsCrud that uses React's useContext hook. 

1. What is this line for?: This line defines a new function, useContactsCrud, that will be used to access the data stored in the context.

2. Why is useContext used here?: `useContext

## Code Refactoring

Take out all these function for the crud operation in App.js into our context api.

### Retrieve Get Contact Data w/ context

```javascript
// context.js
import api from "./api/contacts";

// GET DATA Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
    // return response.data (removed)
  };

  const value = {
    retrieveContacts,
  };
```

The code defines a function called `retrieveContacts`.

1. `const response = await api.get("/contacts");`: This line makes an API call to the URL `/contacts` using the `await` keyword. `await` is used to wait for the API call to complete before moving on to the next line of code.

2. `if (response.data) setContacts(response.data);`: This line checks if the API call was successful and returned any data. If there is data in the response, it is saved in the component's state using `setContacts` function.

So in simple terms, this function `retrieveContacts` is used to retrieve data from an API, and if the data is successfully returned, it is saved in the component's state.

**Why removed the `return response.data`**

- The code defines a function called `retrieveContacts` which makes an API call to retrieve some data. When the data is successfully returned from the API, it is saved in the component's state using `setContacts` function.
- The statement `return response.data` was removed from the code because it's not necessary. The **purpose of returning a value from a function is to use it somewhere else, but in this case, the returned data from the API is immediately saved** in the state using `setContacts`, so there's no need to return the data and use it elsewhere. The state can be directly accessed in the component without the need to return the data from the `retrieveContacts` function.

- `const value = { retrieveContacts };` The code defines a variable called `value` which is an object. This object has a property `retrieveContacts` which holds the value of the `retrieveContacts` function. In simpler terms, the variable `value` is an object that has a property `retrieveContacts` with a reference to the function `retrieveContacts`.

### ListContacts -> useContactsCrud

```javascript
// ListContact.js
const { contacts, retrieveContacts } = useContactsCrud;
```

The code uses destructuring to extract two values from the `useContactsCrud` function.

1. `contacts` - This is the value of the contacts property from the `useContactsCrud` function.

2. `retrieveContacts` - This is the value of the `retrieveContacts` property from the `useContactsCrud` function.

In simple terms, this line of code is taking two values from the `useContactsCrud` function and assigning them to two variables named `contacts` and `retrieveContacts`.

### Delete Context

```javascript
// CardContact.js
import { useContactsCrud } from "../context/contacts-crud-context";

const CardContact = ({ contact }) => {
  const { id, name, email } = contact;
  const { deleteContact } = useContactsCrud();

  const deleteContactHandler = (id) => {
    deleteContact(id);
  };

  // some other codes here
}
```

### Search Context

```javascript
// ListContact.js
const { contacts, retrieveContacts, searchTerm, searchResults, searchHandler } = useContactsCrud();

const renderContactList = (
  searchTerm.length < 1 ? contacts : searchResults
).map((contact) => {
  return <CardContact contact={contact} key={contact.id} />;
});


const onUserSearch = (e) => {
  //console.log(inputElement.current.value);
  searchHandler(e.target.value);
};


<input
  type="text"
  placeholder="search contact..."
  className="prompt"
  value={searchTerm}
  onChange={(e) => onUserSearch(e)}
/>;
```