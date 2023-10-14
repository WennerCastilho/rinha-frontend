import React from "react"
import { ContainerSC, InvalidFileSC, LoadButtonSC, LoadJSONSC, SubTitleSC, TitleSC } from "./homeStyles"
import { IHomeProps } from "./types"
import { readJSON } from "./utils"

export const Home = (props: IHomeProps) => {
  const [status, setStatus] = props.status
  const [setFile] = props.file

  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || []
    if (files.length) {
      const file = files[0]
      const isValid = file.type === 'application/json'
      setStatus(isValid ? 'validFile' : 'invalidExtension')

      if (isValid) {
        const { jsonParsed } = await readJSON(file)

        if ('error' in jsonParsed && jsonParsed.error) {
          setStatus('syntaxError')
          return
        }
        setFile(jsonParsed)
      }
    }
  }
  return (
    <ContainerSC>
      <TitleSC>JSON Tree Viewer</TitleSC>
      <SubTitleSC>Simple JSON Viewer that runs completely on-client. No data exchange</SubTitleSC>
      <LoadJSONSC
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        accept=".json"
      />
      <LoadButtonSC
        type="button"
        onClick={() => inputRef!.current!.click()}
      >Load JSON</LoadButtonSC>
      {(status === 'invalidExtension' || status === 'syntaxError') && <InvalidFileSC>Invalid file. Please load a valid JSON file.</InvalidFileSC>}
    </ContainerSC>
  )
}
