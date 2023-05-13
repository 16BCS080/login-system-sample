import { Navigate } from "react-router-dom";
const Unprotected = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Unprotected;