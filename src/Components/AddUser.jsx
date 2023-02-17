import { useRef } from "react";
import supabase from  "../Config/supabase-client";

export default function AddUser({ setUsers }) {

  const nameInput = useRef();
  const ageInput = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const name = nameInput.current.value;
    const age = ageInput.current.value;
    if (age < 0) {
      alert("Age must be greater than 0");
      return;
    }
    const user = {name, age};

    const { data } = await supabase
      .from("users")
      .insert(user)
      .select()
    const insertedUser = data[0];

    setUsers(prevUsers => [...prevUsers, insertedUser])
  }

  return (
    <section className="container">
      <h2>Add User</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder="User Name" required ref={nameInput}/>
        <input type="number" placeholder="User Age" required ref={ageInput}/>
        <button>Submit</button>
      </form>
    </section>
  )
}