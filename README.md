# React Context API Project

## Overview

This project demonstrates how to use React Context API for global state management across multiple components without prop drilling. It includes features like user login and profile display using shared state.

## Features

- Global state management using Context API.
- Components consuming shared state.
- Login functionality to update user context.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS

## How to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/KAMRANKHANALWI/React5.0.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## Concepts Learned

### 1. React Context API

- Context API is used to share global state without passing props manually through multiple levels.
- Example:
  ```jsx
  import { createContext } from "react";
  export const UserContext = createContext(null);
  ```
- `createContext` helps in creating a global state that can be accessed from anywhere in the component tree.

### 2. Context Provider (`UserContextProvider`)

- Provides global state to components.
- Example:
  ```jsx
  function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
  export default UserContextProvider;
  ```

### 3. Consuming Context with `useContext`

- The `useContext` hook is used to access shared state within components without passing props.
- Example:

  ```jsx
  import { useContext } from "react";
  import { UserContext } from "../context/UserContext";

  function Profile() {
    const { user } = useContext(UserContext);
    return <h2>{user ? `Hello, ${user}` : "Please log in"}</h2>;
  }
  ```

### 4. How to Access Context State

1. **Create Context:** Define a global context using `createContext`.
2. **Provide Context:** Wrap the root component with `UserContextProvider` to share state.
3. **Consume Context:** Use `useContext` in child components to access state.
4. **Update State:** Modify state using setter functions provided by context.

Example:

```jsx
const { user, setUser } = useContext(UserContext);
setUser("John Doe");
```

### 5. Strict Mode

- Helps identify potential issues in development.
- Example:
  ```jsx
  <StrictMode>
    <App />
  </StrictMode>
  ```

## License

This project is licensed under the MIT License.
