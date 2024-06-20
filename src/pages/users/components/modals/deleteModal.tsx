import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalDescription,
  ModalActions,
  Button,
} from 'semantic-ui-react'
import { UserForm } from '../../interfaces/user.interface'
import { useFetch } from '../../../../hooks/useFetch'

interface DeleteModalProps {
  modalConfirm: boolean
  setModalConfirm: (value: boolean) => void
  user?: UserForm
  getUsers: () => void
}

const DeleteModal = ({
  modalConfirm,
  setModalConfirm,
  user,
  getUsers,
}: DeleteModalProps) => {
  const { getFetch } = useFetch()

  const DeleteUser = () => {
    getFetch(`/users?id=${user?.id}`, 'DELETE').then(() => {
      getUsers()
    })
    setModalConfirm(false)
  }

  return (
    <Modal
      className="w-5"
      onClose={() => setModalConfirm(false)}
      onOpen={() => setModalConfirm(true)}
      open={modalConfirm}
    >
      {/*isLoading && <p>loading</p>*/}
      <ModalHeader className="bg-transparent text-center text-3xl text-white">
        Delete Users
      </ModalHeader>
      <ModalContent className="bg-transparent">
        <ModalDescription className="text-xl text-center text-white">
          ¿Esta seguro de eliminar este usuario?
        </ModalDescription>
      </ModalContent>
      <ModalActions className="bg-transparent">
        <Button inverted color="red" className="text-xl" onClick={DeleteUser}>
          si
        </Button>
        <Button
          basic
          inverted
          color="grey"
          className="text-xl"
          onClick={() => {
            setModalConfirm(false)
          }}
        >
          No
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default DeleteModal
