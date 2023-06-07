import useAuthStore from "../store/authStore.ts"
import {Navigate, Outlet} from "react-router-dom"
import SideBar from "../components/SideBar.tsx"

export default function Root() {
    const isAuthenticated = useAuthStore((state) => state.token)

    return isAuthenticated ? (
        <>
            <div className='flex'>
                <SideBar />
                <Outlet />
            </div>
        </>
    ) : <Navigate to="/login" />
}