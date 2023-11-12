import { useState } from "react";
import { useSignup } from "../../../hooks/useAuth";

export default function Form({ styles }) {
	const { mutate, isLoading } = useSignup();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');

	if(isLoading) return <h1>Loading...</h1>

    return (
        <form
			onSubmit={(e) => {
				e.preventDefault();
				if (!username || !password || !passwordConfirm) return;
				mutate({ username, password, passwordConfirm });
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
            <div className={styles.inputContainer}>
				<label htmlFor="passwordConfirm">Repeat Password</label>
				<input
					type="password"
					id="passwordConfirm"
					placeholder="******"
					value={passwordConfirm}
					onChange={(e) => setPasswordConfirm(e.target.value)}
				/>
			</div>

			<button>Create Account</button>
		</form>
    )
}