import { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { BodyTable, HeaderTable } from '../../../../interfaces/table.interfaces'
import { TableMA } from '../../../../components/TableMA/TableMA'
import { useFetch } from '../../../../hooks/useFetch'
import { User, UserForm } from '../../interfaces/user.interface'
import UserModal from '../modals/userModal'
import DeleteModal from '../modals/deleteModal'

const GeneralTab = () => {
  const [user, setUser] = useState<UserForm | undefined>(undefined)
  const [open, setOpen] = useState<boolean>(false)
  const { data, getFetch } = useFetch()
  const [modalConfirm, setModalConfirm] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const headers: HeaderTable[] = [
    {
      key: 'username',
      label: 'Username',
      visible: true,
    },
    {
      key: 'email',
      label: 'Email',
      visible: true,
    },
    {
      key: 'range',
      label: 'Range',
      visible: true,
    },
    {
      key: 'actions',
      label: 'Actions',
      visible: true,
    },
  ]

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    getFetch('/users', 'GET')
  }

  const handleDataValue = (_e: React.ChangeEvent<HTMLInputElement>) => {
    const dataValue = _e.target.value
    setSearchValue(dataValue)
  }

  const getDataBodyTransformed = () => {
    if (!data) return []

    const responseData = data as User[]
    const dataBody: BodyTable[][] = responseData.map((item) => {
      return [
        {
          key: 'username',
          value: item.username,
          type: 'string',
        },
        {
          key: 'email',
          value: item.email,
          type: 'string',
        },
        {
          key: 'range',
          value: item.range?.name,
          type: 'string',
        },
        {
          key: 'actions',
          values: [
            // {
            //   icon: 'image',
            //   action: () => console.log('Execute nft icon 1'),
            // },
            {
              icon: 'pencil',
              action: () => {
                setOpen(true)
                setUser({
                  id: item.id,
                  username: item.username,
                  email: item.email,
                  role: item.role?.id,
                  range: item?.range?.id,
                  isActive: item.isActive,
                })
              },
            },
            {
              icon: 'trash',
              action: () => {
                setModalConfirm(true)
                setUser({
                  id: item.id,
                })
              },
            },
          ],
          type: 'actions',
        },
      ]
    })
    return dataBody
  }

  const loadData = () => {
    const body = getDataBodyTransformed()
    return {
      headers,
      body,
    }
  }

  return (
    <div className="flex flex-column gap-5">
      {/* isLoading && <LoaderSpinner /> */}
      <div className="flex gap-5">
        <input
          onChange={handleDataValue}
          className="bg-transparent text-white p-2 border-round-2xl w-full"
          placeholder="Search"
          type="search"
          name="search"
          id="search"
        />
        <Button circular icon="plus" onClick={() => setOpen(true)} />
        <UserModal
          getUsers={getUsers}
          setOpen={setOpen}
          open={open}
          user={user}
        />
        <DeleteModal
          modalConfirm={modalConfirm}
          setModalConfirm={setModalConfirm}
          user={user}
          getUsers={getUsers}
        />
      </div>
      <TableMA {...loadData()} search={searchValue} tableNumber={5} />
    </div>
  )
}

export default GeneralTab
