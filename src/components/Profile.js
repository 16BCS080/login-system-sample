import { useSelector,useDispatch } from 'react-redux'
import { logout } from "../features/auth/authSlice"

function Profile() {
  const access_info = useSelector( (state) => state.auth );
  const dispatch = useDispatch();

  const logoutUser = () => {
    console.log("logout")
    localStorage.clear();
    dispatch(logout());
  }

  return (
    <p>
      Profile page looged in access & access token: {access_info.accessToken} 
      <button onClick={ logoutUser } > logout</button>
    </p>
  );
}

export default Profile;
