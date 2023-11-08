import { useState } from "react";
import Logo from "../../../assets/simple-logo.png";
import { useLogin } from "../../../hooks/useAuth";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading } = useLogin();

  if (isLoading) return <h1>LOADING...</h1>;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!username || !password) return;
        mutate({ username, password });
      }}
    >
      <img src={Logo} />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>LOGIN</button>
    </form>
  );
}
