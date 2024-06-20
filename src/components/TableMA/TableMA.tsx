import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Pagination,
  PaginationProps,
} from 'semantic-ui-react'
import { ItemTable } from './ItemTable'
import { BodyTable, HeaderTable } from '../../interfaces/table.interfaces'
import React, { useEffect, useState } from 'react'

export interface TableProps {
  headers: HeaderTable[]
  body: BodyTable[][]
  search: string
  tableNumber: number
}

export const TableMA = (tableProps: TableProps) => {
  const { headers, body, search, tableNumber } = tableProps
  const [activePage, setActivePage] = useState<number | number>(1)
  const itemsPerPages = tableNumber
  const totalPages = Math.ceil(body.length / itemsPerPages)
  const [newPaginatedBody, setNewPaginatedBody] = useState<BodyTable[][]>([])
  let data: BodyTable[][] = body

  const filterData = (search: string) => {
    const dataFiltered: BodyTable[][] = []
    body.forEach((item) => {
      const itemFound =
        item.filter((item2) =>
          item2.value?.toString().toLowerCase().includes(search.toLowerCase()),
        ).length > 0
      dataFiltered.push(itemFound ? item : [])
    })

    return dataFiltered.filter((item) => item.length > 0)
  }

  useEffect(() => {
    setActivePage(1)
  }, [search])

  useEffect(() => {
    data = body
    data = filterData(search)
    paginationLoad()
  }, [body, search, activePage])

  const paginationLoad = () => {
    const paginatedBody = data.slice(
      (activePage - 1) * itemsPerPages,
      activePage * itemsPerPages,
    )
    setNewPaginatedBody(paginatedBody)
  }

  const handlePageChange = (
    _e: React.MouseEvent<HTMLElement>,
    { activePage }: PaginationProps,
  ) => {
    setActivePage(Number(activePage))
  }

  const renderTableItem = (headerItem: HeaderTable, bodyTable: BodyTable[]) => {
    const item = bodyTable.find((bodyItem) => headerItem.key === bodyItem.key)
    if (!item) return <span>No item</span>
    return <ItemTable {...item} />
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map(
              (header) =>
                header.visible && (
                  <TableHeaderCell key={header.key}>
                    {header.label}
                  </TableHeaderCell>
                ),
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {newPaginatedBody.map((bodyItem) => (
            <TableRow key={bodyItem[0].key}>
              {headers.map(
                (headerItem) =>
                  headerItem.visible && renderTableItem(headerItem, bodyItem),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        className="bg-transparent"
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
