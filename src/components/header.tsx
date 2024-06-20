import logout from './../assets/logout.svg'
import users from './../assets/user_logo.svg'

const Header = () => {
  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }
  return (
    <div className="flex justify-content-between">
      <div className="flex pt-6 text-white">
        <img className="pl-4 w-3rem" src={users} alt="users" />
        <h2 className="pl-4 pb-3 text-xl">USERS</h2>
      </div>
      <button
        onClick={handleLogOut}
        className="pr-5 flex align-items-center bg-transparent border-none"
      >
        <img className="w-2rem" src={logout} alt="logout" />
      </button>
    </div>
  )
}

export default Header
