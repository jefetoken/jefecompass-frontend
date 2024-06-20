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

const LeaderboardTable = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="w-full">
      <div className="w-full flex gap-5">
        <Search className="w-4" />
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <ModalHeader>User Profile</ModalHeader>
          <ModalContent>
            <ModalDescription>
              <Input placeholder="position" />
            </ModalDescription>
          </ModalContent>
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
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Username</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button icon="bars" />
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>LROSANIA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default LeaderboardTable
