import { useState } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Search,
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalDescription,
  ModalActions,
  Input,
} from 'semantic-ui-react'

const FundsTable = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <div className="w-full flex gap-5">
        <Search className="w-4" />
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button circular icon="plus" />}
        >
          <ModalHeader>User Profile</ModalHeader>
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
      </div>
      <Table singleLine>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>campo 1</TableHeaderCell>
            <TableHeaderCell>campo 2</TableHeaderCell>
            <TableHeaderCell>campo 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>contenido 1</TableCell>
            <TableCell>contenido 2</TableCell>
            <TableCell>contenido 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default FundsTable
