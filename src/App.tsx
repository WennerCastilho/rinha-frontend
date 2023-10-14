import { useState } from "react"
import { ContainerSC } from "./AppStyles"
import { Home } from "./components/Home"
import { ViewerJson } from "./components/ViewerJson"
import { StatusType } from "./shared/types"

export const App = () => {
  const [status, setStatus] = useState<StatusType>(undefined)
  const [file, setFile] = useState({})

  return (
    <ContainerSC>
      {
        status === 'validFile' ?
          <ViewerJson status={[setStatus]} file={[file, setFile]} /> :
          <Home status={[status, setStatus]} file={[setFile]} />
      }
    </ContainerSC>
  )
}
