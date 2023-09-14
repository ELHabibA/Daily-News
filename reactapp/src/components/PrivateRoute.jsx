/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

/**
 * Component to check whether the session cookie exists or not.
 * If exists, it redirects to the provided `children` component.
 * Otherwise, does nothing.
 * 
 * @param {String} redirectPath 
 * @param {Component} children  
 * @returns 
 */
const PrivateRoute = ({
    redirectPath = '/login',
    children,
}) => {
    const [cookies] = useCookies(['session']);
    const token = localStorage.getItem("token")
    if (!cookies.session || !token) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default PrivateRoute;