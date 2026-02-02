import toast from "react-hot-toast"
import { useAuth } from "../context/authProvider"


function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("User")
            toast.success("Logout successfully")
            setTimeout(() => {
                window.location.reload();

            }, 2000)

        } catch (error) {
            toast.error("Error", error.message)
            setTimeout(() => { }, 2000)
        }
    }
    return (
        <button className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
            onClick={handlelogout}>
            Logout
        </button>
    )
}

export default Logout