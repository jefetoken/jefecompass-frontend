import users from './../assets/user_logo.svg'
import logo from './../assets/logo_puño.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sideslide = () => {
  const [activeTab, setActiveTab] = useState('GENERAL')

  return (
    <div className="w-2 p-4">
      <div className="w-full h-full bg-dash border-round-3xl flex flex-column align-items-center py-8">
        <img src={logo} alt="logo_puño" />
        <div className="w-full flex flex-column pt-8 m-8 text-lg align-items-center">
          <div className="w-full flex ">
            <div className="w-6 flex justify-content-end">
              <img className="pr-3" src={users} alt="users" height={20} />
            </div>
            <Link
              className={`pf-active flex align-items-end  text-white w-6 pl-2 ${activeTab === 'GENERAL' ? 'border-right-2 ' : ''}`}
              to={'#'}
              onClick={() => setActiveTab('GENERAL')}
            >
              Users
            </Link>
          </div>
          {/* <div className="w-full flex pt-4">
            <div className="w-6 flex justify-content-end">
              <img className="pr-3" src={users} alt="news" />
            </div>
            <Link
              className={`pf-active flex align-items-end  w-6 pl-2 text-white ${activeTab === 'NEWS' ? 'border-right-2 ' : ''}`}
              to={'#'}
              onClick={() => setActiveTab('NEWS')}
            >
              News
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Sideslide
