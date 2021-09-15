import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <span className={s.email}>{email}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={s.button}
      >
        LogOut
      </button>
    </div>
  );
}

//
