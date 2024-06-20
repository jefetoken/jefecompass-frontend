import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from 'semantic-ui-react'
import type { GenericModal } from '../../../../interfaces/modal.interface'
import { useEffect, useState } from 'react'
import { UserForm } from '../../interfaces/user.interface'
import { useFetch } from '../../../../hooks/useFetch'

interface UserModalInterface extends GenericModal {
  user?: UserForm
  getUsers: () => void
}

const optionsRole = [
  { key: 1, text: 'Admin', value: 1 },
  { key: 2, text: 'User', value: 2 },
]

const optionsRange = [
  { key: 1, text: 'Diamand', value: 1 },
  { key: 2, text: 'Platinum', value: 2 },
]

const UserModal = ({ open, setOpen, user, getUsers }: UserModalInterface) => {
  const [username, setUsername] = useState<string | undefined>('')
  const [password, setPassword] = useState<string>('')
  const [range, setRange] = useState<number | undefined>(undefined)
  const [role, setRole] = useState<number | undefined>(undefined)
  const [email, setEmail] = useState<string | undefined>('')
  const [isActivated, setIsActivated] = useState<boolean>(true)

  const { getFetch } = useFetch()

  const handleAddUser = () => {
    const userData: UserForm = {
      username,
      password,
      range,
      role,
      email,
      isActive: isActivated,
    }

    getFetch('/users', 'POST', userData)
      .then(() => {
        setOpen(false)
        getUsers()
      })
      .catch(() => {})

    setUsername('')
    setPassword('')
    setRange(0)
    setRole(0)
    setEmail('')
    setOpen(false)
  }

  const editUser = () => {
    const dataUserEdit = {
      username,
      password,
      range,
      role,
      email: email,
      isActive: isActivated,
    }
    getFetch(`/users?id=${user?.id}`, 'PATCH', dataUserEdit).then(() => {
      setOpen(false)
      getUsers()
    })
  }

  useEffect(() => {
    if (open) return setIsActivated(true)
  }, [open])

  useEffect(() => {
    setUsername(user?.username)
    setEmail(user?.email)
    setRange(user?.range)
    setRole(user?.role)
    setIsActivated(user?.isActive ?? true)
  }, [user])

  return (
    <Modal
      className=" w-5"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <ModalHeader className="bg-transparent text-white text-center">
        User Profile
      </ModalHeader>
      <ModalContent className="flex gap-5 bg-transparent">
        <ModalDescription>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </ModalDescription>
        <ModalDescription>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ModalDescription>
      </ModalContent>
      <ModalContent className="bg-transparent flex gap-5">
        <ModalDescription className="bg-dash border-round-md">
          <Dropdown
            className="w-full bg-transparent text-gray-400"
            placeholder="Range"
            clearable
            options={optionsRange}
            selection
            onChange={(_e, { value }) => setRange(value as number)}
            value={range}
          />
        </ModalDescription>
        <ModalDescription className="bg-dash border-round-md">
          <Dropdown
            className="w-full bg-transparent text-gray-400"
            placeholder="Role"
            clearable
            options={optionsRole}
            selection
            onChange={(_e, { value }) => setRole(value as number)}
            value={role}
          />
        </ModalDescription>
      </ModalContent>
      <ModalContent className="w-full bg-transparent flex gap-5">
        <ModalDescription className="w-5">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ModalDescription>
        <ModalDescription className=" w-5 border-round-md flex">
          <Checkbox
            checked={isActivated}
            onChange={() => setIsActivated(!isActivated)}
            className=" p-3  text-white text-white"
          />
          <label
            htmlFor="checkbox"
            className="flex align-items-center pt-2 pl-4 text-white"
          >
            Is Activate
          </label>
        </ModalDescription>
      </ModalContent>
      <ModalActions className="flex justify-content-center bg-transparent">
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          className="bg-red-900"
          content="ACCEPT"
          labelPosition="right"
          icon="checkmark"
          onClick={user ? editUser : handleAddUser}
          positive
        />
      </ModalActions>
    </Modal>
  )
}

export default UserModal
