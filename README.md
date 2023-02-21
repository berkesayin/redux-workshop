# State Management With Redux

[Redux Docs](https://redux.js.org/)

[Redux Toolkit Docs](https://redux-toolkit.js.org/)


#### Create A React Application

```sh
npx create-react-app my-app
```

> **Notes:** 'Create React App' doesn't include redux.

```sh
cd my-app
npm install redux
```

> **Main Subjects:** Component level states, global level states, store, reducers, actions, dispatch, redux devtools, provider...

#### Component Level State
- Features required for only component or its children should be defined as component level state.
- So, it is used within a component and its direct children only.
- And data changes based on other data within the component.


#### Global Level State
- Will this piece of data be the same across the entire application? Will this piece of data be used across more than one component? 
- If the answers to both questions are 'Yes', then this piece of data should ideally be stored in global state. The idea being that if you are using this same piece of data all over your application, it makes more sense to be able to pull that from a single, central location. 

#### State Management With Redux 
- Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 

#### Store 
- A store is an immutable object tree in Redux. A store is a state container which holds the application's state (applicaiton level states = global level states). Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.

- Let us see how we can create a store using the createStore method from Redux. One need to import the createStore package from the Redux library that supports the store creation process as shown below −

```sh
import { createStore } from 'redux';
import reducer from './reducers/reducer'
const store = createStore(reducer);
```

- A createStore function can have three arguments. The following is the syntax −

```sh
createStore(reducer, [preloadedState], [enhancer])
```
- A reducer is a function that returns the next state of app. A preloadedState is an optional argument and is the initial state of your app. An enhancer is also an optional argument. It will help you enhance store with third-party capabilities.

- A store has three important methods as given below − `getState, dispatch, subscribe`

##### getState()
- It helps you retrieve the current state of your Redux store.
- The syntax for getState is as follows − 

```sh
store.getState()
```

##### dispatch()
- It allows you to dispatch an action to change a state in your application.

- The syntax for dispatch is as follows −

```sh
store.dispatch({type:'ITEMS_REQUEST'})
```

##### subscribe()
- It helps you register a callback that Redux store will call when an action has been dispatched. As soon as the Redux state has been updated, the view will re-render automatically.

- The syntax for dispatch is as follows −

```sh
store.subscribe(()=>{ console.log(store.getState());})
```
- Note that subscribe function returns a function for unsubscribing the listener. To unsubscribe the listener, we can use the below code −

```sh
const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
unsubscribe();
```

#### Reducers 
- Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words; ``(state, action) => newState``
#### Actions 
- Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.

- In the same way that we designed the state structure based on the app's requirements, we should also be able to come up with a list of some of the actions that describe what's happening:

##### Actions Examples:

- Add a new todo entry based on the text the user entered
- Toggle the completed status of a todo
- Select a color category for a todo
- Delete a todo
- Mark all todos as completed
- Clear all completed todos
- Choose a different "completed" filter value
- Add a new color filter
- Remove a color filter
<br>
- We normally put any extra data needed to describe what's happening into the ``action.payload`` field. This could be a number, a string, or an object with multiple fields inside.

- Based on that list of things that can happen, we can create a list of actions that our application will use:

- ``{type: 'todos/todoAdded', payload: todoText}``
- ``{type: 'todos/todoToggled', payload: todoId}``
- ``{type: 'todos/colorSelected', payload: {todoId, color}}``
- ``{type: 'todos/todoDeleted', payload: todoId}``
- ``{type: 'todos/allCompleted'}``
- ``{type: 'todos/completedCleared'}``
- ``{type: 'filters/statusFilterChanged', payload: filterValue}``
- ``{type: 'filters/colorFilterChanged', payload: {color, changeType}``


#### Dispatch 
- ``dispatch`` is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change. With React Redux, your components never access the store directly - connect does it for you.


#### Redux Dev Tools
- Redux-Devtools provide us debugging platform for Redux apps. It allows us to perform time-travel debugging and live editing. Some of the features in official documentation are as follows − It lets you inspect every state and action payload. It lets you go back in time by “cancelling” actions.

#### About Repository
- This repository is created to practice the basics of state managements with redux. 

```bash
redux-workshop
├── redux-intro
│   └── src
│   │    └── App.js
│   │    └── App.css
│   │    └── index.js
│   │    └── index.css
│       
├── redux-with-react
│   └── src
│   │    └── actions
│   │        └── index.js
│   │    └── reducers
│   │        └── index.js
│   │        └── counter.js
│   │        └── isLogged.js
│   │    └── App.js
│   │    └── App.css
│   │    └── index.js
│   │    └── index.css
│
├── README.md
│                      
```

- In ``redux-intro``, basic view of redux is shown. In ``redux-with-react``, basic counter (decrement/increment 1) app is practiced with redux fundamentals.





