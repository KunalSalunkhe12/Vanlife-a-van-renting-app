import { redirect } from "react-router-dom";
//fake login authentication
export const requireAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        const response = redirect('/login');
        response.body = true;
        return response;
    }
    return null;
}