# Code Explaination Line By Line

## JavaScript Spread Operator + Form Submit

```jsx
value={addContactForm.name}
onChange={ (e) =>
            setAddContactForm({ ...addContactForm, name: e.target.value })
         }
```

This code is using a React hook called `useState` to **update the `addContactForm` object with the current value of an input element** whenever the value of that input element changes. From empty array `" "` to some text input.

The `...addContactForm` is a JavaScript spread operator, it makes a copy of all the properties, the `name` and `email` of the `addContactForm` object and add the new property `name: e.target.value` to it, which we target for the `name` property to update/add new value or current value.

Here's what each line of code does:

1. `value={addContactForm.name}` - This line sets the value of the input element to the current value of the `name` property of the `addContactForm` object. This is done so that the input element is initialized with the current value of the name property. Set from an empty array `" "` to `John`.

2. `onChange={(e) =>` - This is the start of an event handler function that will be called whenever the value of the input element changes. The `e` parameter is an event object that contains information about the event.

3. `setAddContactForm({ ...addContactForm, name: e.target.value });` - This line is using **the `setAddContactForm` function to update the `addContactForm` object**. The `...addContactForm` is a **spread operator which copies all properties of the `addContactForm` object**, and the `name: e.target.value` is updating the `name` property of the `addContactForm` object with the current value of the input element `(e.target.value)`. Update the name property from its initial value of an empty array `" "` to `John`.

4. `}}` - This is the end of the event handler function.

So, the **spread operator is used to make a copy of all the existing properties of `addContactForm`, and then the new property `name: e.target.value` is added to it**.

Then the **setAddContactForm function updates the addContactForm object with this new object**. This allows the **previous data in the addContactForm object to remain unchanged and only the name field is updated** with the current input value.

In addition, **`e.target.value` is the current value of the input element**, it's getting the value of the input element every time the input is changed, that's why it's able to update the input value dynamically.