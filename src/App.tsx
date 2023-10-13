import { useState } from "react"
import { ContainerSC } from "./AppStyles"
import { Home } from "./components/Home"
import { ViewerJson } from "./components/ViewerJson"

export const App = () => {
  const [viewJson, setViewJson] = useState(false)
  return (
    <ContainerSC>
      {viewJson ?
        <ViewerJson stateViewJson={[setViewJson]} /> :
        <Home stateViewJson={[setViewJson]} />}
    </ContainerSC>
  )
}
