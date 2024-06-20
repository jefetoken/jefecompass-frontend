import {
  Button,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from 'semantic-ui-react'
import { GenericModal } from '../../../../interfaces/modal.interface'

const WalletModal = ({ open, setOpen }: GenericModal) => {
  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <ModalHeader>Wallet</ModalHeader>
      <ModalContent>
        <ModalDescription>
          <Input placeholder="Username" />
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </ModalActions>
    </Modal>
  )
}

export default WalletModal
