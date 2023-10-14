import { Dispatch, SetStateAction } from "react";
import { StatusType } from "../../shared/types";

export interface IViewJsonProps {
  status: [setStatus: Dispatch<SetStateAction<StatusType>>]
  file: [file: object, setFile: Dispatch<SetStateAction<object>>]
}
