import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

import Title from "../Title";
import s from "../ContactForm/ContactForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <div>
      <Title> LogIn</Title>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            className={s.input}
          />
        </label>

        <button type="submit" className={s.btn}>
          LogIn
        </button>
      </form>
    </div>
  );
}
