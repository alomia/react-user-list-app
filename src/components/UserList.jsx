import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { useGlobalState } from "../context/GlobalState";

function UserList() {
  const [users, setUsers] = useState([]);

  const { page } = useGlobalState();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          `https://reqres.in/api/users?page=${page}`
        );
        const json = await response.json();
        setUsers(json["data"]);
      } catch (error) {
        console.log("Error getting users: ", error);
      }
    }

    fetchUsers();
  }, [page]);
  return (
    <section className="bg-orange-300 p-3">
      <h3 className="font-medium">Current page: {page}</h3>
      <ul className="m-2">
        {users &&
          users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
      </ul>
    </section>
  );
}

export default UserList;
