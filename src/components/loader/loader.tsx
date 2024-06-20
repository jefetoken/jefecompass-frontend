import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderSpinner = () => (
  <div className="absolute bg-black w-full h-screen">
    <Dimmer active>
      <Loader indeterminate>Loading</Loader>
    </Dimmer>
  </div>
)

export default LoaderSpinner
