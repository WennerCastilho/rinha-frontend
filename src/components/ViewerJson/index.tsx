import { ContainerSC } from "./ViewerJsonStyles"
import { IViewJsonProps } from "./types"

export const ViewerJson = (props: IViewJsonProps) => {
  const [file, setFile] = props.file
  const [setStatus] = props.status

  const handleOnClick = () => {
    setStatus(undefined)
    setFile({})
  }

  return (
    <ContainerSC>
      <button onClick={handleOnClick}>Voltar</button>
      {JSON.stringify(file)}
    </ContainerSC>
  )
}
