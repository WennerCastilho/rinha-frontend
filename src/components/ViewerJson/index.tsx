import { ContainerSC, HomeButtonSC } from "./ViewerJsonStyles"
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
      <HomeButtonSC onClick={handleOnClick}>⬅️ Voltar</HomeButtonSC>
      {JSON.stringify(file)}
    </ContainerSC>
  )
}
