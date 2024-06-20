import { Button, List, ListItem, TableCell } from 'semantic-ui-react'
import { BodyTable } from '../../interfaces/table.interfaces'

interface ButtonItem {
  label?: string
  icon?: string
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive'
  action: () => void
}

interface ListItem {
  label?: string
  button?: ButtonItem
  type: 'button' | 'string'
}

const ITEMTYPES = {
  STRING: 'string',
  LIST: 'list',
  ACTIONS: 'actions',
}

export const ItemTable = (item: BodyTable) => {
  const values = item.values

  const StringItem = () => <span>{item.value}</span>

  const ListItemComp = () => {
    if (!values)
      throw new Error('No "Values" parameter was sent to render the list.')
    const listItems = values.map((item) => {
      const { label, button, type } = item as ListItem

      if (!type) throw new Error('"Type" must be sent in item type list')

      const typeSelected = {
        string: () => {
          if (!label)
            throw new Error('Label must be sent when it is of type string')
          return label
        },
        button: () => {
          if (!button)
            throw new Error('A button must be sent when it is of type button.')
          return (
            <Button
              circular
              icon={button?.icon}
              onClick={button?.action}
              label={button?.label}
              size={button?.size || 'medium'}
            />
          )
        },
      }
      return typeSelected[type]()
    })

    return (
      <List>
        {listItems.map((item) => (
          <ListItem key={crypto.randomUUID()}> {item} </ListItem>
        ))}
      </List>
    )
  }

  const ActionsItem = () => {
    if (!values)
      throw new Error('No "Values" parameter was sent to render the actions.')
    return (
      <div className="flex gap-5">
        {values.map((item) => {
          const button = item as ButtonItem
          return (
            <Button
              key={crypto.randomUUID()}
              circular
              icon={button?.icon}
              onClick={button?.action}
              label={button?.label}
              size={button?.size || 'medium'}
            />
          )
        })}
      </div>
    )
  }

  return (
    <TableCell>
      {item.type === ITEMTYPES.STRING ? <StringItem /> : null}
      {item.type === ITEMTYPES.LIST ? <ListItemComp /> : null}
      {item.type === ITEMTYPES.ACTIONS ? <ActionsItem /> : null}
    </TableCell>
  )
}
