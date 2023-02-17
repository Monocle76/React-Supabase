import { useState } from "react";
import AddUser from "./Components/AddUser";
import DisplayUsers from "./Components/DisplayUsers";

function App() {
  const [ users, setUsers ] = useState([]);

  return (
    <>
      <DisplayUsers setUsers={setUsers} users={users} />
      <AddUser setUsers={setUsers} />
    </>
  );
}

export default App
