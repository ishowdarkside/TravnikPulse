import { useState } from "react";
import { useLogin } from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";

export default function Form({ styles }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading } = useLogin();

  if (isLoading) return <Spinner />;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!username || !password) return;
        mutate({ username, password });
      }}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="johndoe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button>Login</button>
      <Link to="/app/register">Create Account</Link>
    </form>
  );
}
