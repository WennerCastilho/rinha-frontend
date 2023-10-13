import React, { useState } from "react"
import { ContainerSC, InvalidFileSC, LoadButtonSC, LoadJSONSC, SubTitleSC, TitleSC } from "./homeStyles"
import { IHomeProps } from "./types"

export const Home = (props: IHomeProps) => {
  const [isValidExtension, setIsValidExtension] = useState<boolean | null>(null)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const [setViewJson] = props.stateViewJson

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || []
    if (files.length) {
      const file = files[0]
      const isValid = file.type === 'application/json'
      setIsValidExtension(isValid)
      setViewJson(isValid)

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
      />
      <LoadButtonSC
        type="button"
        onClick={() => inputRef!.current!.click()}
      >Load JSON</LoadButtonSC>
      {isValidExtension === false && <InvalidFileSC>Invalid file. Please load a valid JSON file.</InvalidFileSC>}
    </ContainerSC>
  )
}
