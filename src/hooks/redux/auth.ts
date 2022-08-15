import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../../redux/reducers";
import { loginAction, logoutAction } from "../../redux/actions";

export const useAccountState = () => useSelector(({
  authReducer: { account }
}: RootState) => account);

export const useLoginAction = () => {
  const dispatch = useDispatch();
  return (username: string, password: string) => dispatch(loginAction(username, password));
}

export const useLogoutAction = () => {
  const dispatch = useDispatch();
  return () => dispatch(logoutAction());
}