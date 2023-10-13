import React from "react"
import { ContainerSC } from "./ViewerJsonStyles"
import { IViewJsonProps } from "./types"

export const ViewerJson = (props: IViewJsonProps) => {
  const [setViewJson] = props.stateViewJson
  return (
    <ContainerSC>
      <button onClick={() => setViewJson(false)}>Voltar</button>
      ViewerJson
    </ContainerSC>
  )
}
