import { TabPane, Tab } from 'semantic-ui-react'
import GeneralTab from './components/tabs/generalTab'
import WalletTab from './components/tabs/walletsTab'

// import JefeTable from './components/jefeTable'
// import LeaderboardTable from './components/leaderboardTable'
// import FundsTable from './components/fundsTable'

import Header from '../../components/header'
import Sideslide from '../../components/sideslide'

const Users = () => {
  const panes = [
    {
      menuItem: 'GENERAL',
      render: () => (
        <TabPane attached={false}>
          <GeneralTab />
        </TabPane>
      ),
    },
    {
      menuItem: 'WALLETS',
      render: () => (
        <TabPane attached={false}>
          <WalletTab />
        </TabPane>
      ),
    },
    // {
    //   menuItem: 'JEFEZOMBIES',
    //   render: () => (
    //     <TabPane attached={false}>
    //       <JefeTable />
    //     </TabPane>
    //   ),
    // },
    // {
    //   menuItem: 'LEADERBOARD',
    //   render: () => (
    //     <TabPane attached={false}>
    //       <LeaderboardTable />
    //     </TabPane>
    //   ),
    // },
    // {
    //   menuItem: 'FUNDS',
    //   render: () => (
    //     <TabPane attached={false}>
    //       <FundsTable />
    //     </TabPane>
    //   ),
    // },
  ]

  return (
    <div className="flex flex-row w-full h-screen fondo overflow-x-auto ">
      <Sideslide />
      <div className="w-full">
        <Header />
        <Tab
          className="p-5 bg-dash border-round-3xl m-5"
          menu={{ secondary: true }}
          panes={panes}
        />
      </div>
    </div>
  )
}

export default Users
