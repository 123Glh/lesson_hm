import React from "react";
import { useState } from "react";
import useUsersStore from "../store/user";
const Users = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const users = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const deleteUser = useUsersStore((state) => state.deleteUser);
  const handleAddUser = () => {
    if (name.trim() !== "" && age > 0) {
      addUser(name, age);
      setname("");
      setage(0);
    }
  };
  return (
    <div className="users flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border p-2 rounded-l"
          value={name}
          onChange={(e) => setname(String(e.target.value))}
          placeholder="Add a new user"
        />
      </div>
      <div className="flex mb-4">
        <input
          type="number"
          className="flex-grow border p-2 rounded-l"
          value={age}
          onChange={(e) => setage(Number(e.target.value))}
          placeholder="Add a new user"
        />
      </div>
      <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleAddUser}>Add</button>
      <div
        className="flex justify-between items-center border p-2 rounded"
      >
        <ul>
          {
            users.map((user, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{user.name}</span>
                <span>{user.age}</span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteUser(user.name)}
                >
                  Delete
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default Users;