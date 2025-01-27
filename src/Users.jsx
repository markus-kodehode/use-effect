import { useState } from "react";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  const [newUser, setNewUser] = useState({ username: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUser.username && newUser.email) {
      setUsers((prev) => [...prev, newUser]);
      setNewUser({ username: "", email: "" });
    }
  };

  return (
    <div className="users">
      <form className="user-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username.."
          value={newUser.username}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Email.."
          value={newUser.email}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <button type="submit">Add User</button>
      </form>
      <div className="users-list">
        {users.map((user, i) => (
          <div key={i} className="user-card">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
