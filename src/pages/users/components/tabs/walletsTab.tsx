import { useEffect, useState } from 'react'
import { TableMA } from '../../../../components/TableMA/TableMA'
import { BodyTable, HeaderTable } from '../../../../interfaces/table.interfaces'
import { Wallet } from '../../interfaces/wallet.interface'
import { useFetch } from '../../../../hooks/useFetch'
import WalletModal from '../modals/walletModal'

const WalletTab = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { data, getFetch } = useFetch()
  const [searchValue, setSearchValue] = useState<string>('')

  const headers: HeaderTable[] = [
    {
      key: 'username',
      label: 'Username',
      visible: true,
    },
    {
      key: 'wallet',
      label: 'Wallet',
      visible: true,
    },
    {
      key: 'jefev2',
      label: 'JefeV2',
      visible: true,
    },
    {
      key: 'jefev3',
      label: 'JefeV3',
      visible: true,
    },
    {
      key: 'op',
      label: 'Op',
      visible: true,
    },
    {
      key: 'bnb',
      label: 'Bnb',
      visible: true,
    },
    {
      key: 'eth',
      label: 'Eth',
      visible: true,
    },
  ]

  useEffect(() => {
    getFetch('/wallet', 'GET')
  }, [])

  console.log(data)

  const handleDataValue = (_e: React.ChangeEvent<HTMLInputElement>) => {
    const dataValue = _e.target.value
    setSearchValue(dataValue)
  }

  const getDataBodyTransformed = () => {
    if (!data) return []
    const responseData = data as Wallet[]
    const dataBody: BodyTable[][] = responseData.map((item) => {
      return [
        {
          key: 'username',
          value: item.user?.username || '',
          type: 'string',
        },
        {
          key: 'wallet',
          value: item.address,
          type: 'string',
        },
        {
          key: 'jefev2',
          value: item.jefev2.padStart(1, '0'),
          type: 'string',
        },
        {
          key: 'jefev3',
          value: item.jefev3.padStart(1, '0'),
          type: 'string',
        },
        {
          key: 'op',
          value: item.op.padStart(1, '0'),
          type: 'string',
        },
        {
          key: 'bnb',
          value: item.bnb.padStart(1, '0'),
          type: 'string',
        },
        {
          key: 'eth',
          value: item.eth.padStart(1, '0'),
          type: 'string',
        },
      ]
    })
    return dataBody
  }

  console.log(getDataBodyTransformed)

  const loadData = () => {
    const body = getDataBodyTransformed()
    return {
      headers,
      body,
    }
  }

  return (
    <div className="flex flex-column gap-5">
      <div className="flex gap-5">
        <input
          onChange={handleDataValue}
          className="bg-transparent text-white p-2 border-round-2xl w-full"
          placeholder="Search"
          type="search"
          name="search"
          id="search"
        />
        <WalletModal setOpen={setOpen} open={open} />
      </div>
      <TableMA {...loadData()} search={searchValue} tableNumber={7} />
    </div>
  )
}

export default WalletTab
