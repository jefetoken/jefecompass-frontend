import { Button } from 'semantic-ui-react'
import logo from './../../assets/logo_puño.svg'
import userIcon from './../../assets/user_icon.svg'
import passIcon from './../../assets/pass_icon.svg'
import { useFetch } from '../../hooks/useFetch'
import { ChangeEvent, useState } from 'react'

const Login = () => {
  const inputStyle = 'w-full bg-transparent border-none text-xl text-white'
  const inputIcon = 'flex border-bottom-1 border-gray-700 gap-3'
  const { getFetchPublic } = useFetch()
  const [dataInput, setDataInput] = useState<object>({
    username: '',
    password: '',
  })

  const captureDataInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.placeholder === 'Username') {
      setDataInput((prevState) => ({ ...prevState, username: e.target.value }))
    } else {
      setDataInput((prevState) => ({ ...prevState, password: e.target.value }))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      intoLogin()
    }
  }

  const intoLogin = async () => {
    try {
      if (
        Object(dataInput)?.password === '' ||
        Object(dataInput)?.username === ''
      ) {
        alert('no se puede dejar espacios vacios')
      } else {
        const { hasError, data } = await getFetchPublic(
          '/auth/login',
          'POST',
          dataInput,
        )

        if (!hasError) {
          const token = data?.token
          localStorage.setItem('token', token)
          window.location.href = '/'
        } else {
          alert('Incorrect username or password')
        }
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  return (
    <div className="fondoLogin w-full h-screen flex flex-column justify-content-center align-items-center">
      <div>
        <img src={logo} alt="logo" height={109} />
      </div>
      <div className="w-4 h-22rem mt-6 mb-8 border-round-xl flex flex-column justify-content-center align-items-center">
        <div className="w-9">
          <div className="w-full flex flex-column gap-6">
            <div className={inputIcon}>
              <img
                src={userIcon}
                alt="user icon"
                height={25}
                className="pb-2"
              />
              <input
                type="text"
                placeholder="Username"
                className={inputStyle}
                onChange={captureDataInput}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className={inputIcon}>
              <img
                src={passIcon}
                alt="password icon"
                height={25}
                className="pb-2"
              />
              <input
                type="password"
                placeholder="Password"
                className={inputStyle}
                onChange={captureDataInput}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
        <div className="w-9 flex justify-content-center mt-5">
          <Button circular onClick={intoLogin} className="w-6 text-lg py-3">
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
