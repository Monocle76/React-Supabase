import { useEffect, useState } from "react";
import supabase from  "../Config/supabase-client";

export default function DisplayUsers({ users, setUsers }) {
  const [ loading, setLoading ] = useState(true);

  async function getUsers() {
    const { data } = await supabase
      .from("users")
      .select("*");
    setUsers(data);
    setLoading(false);
  }
  
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="container">
      <h1>All Users</h1>
      {!loading ? <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul> : <p>Loading...</p>}
    </div>
  )
}