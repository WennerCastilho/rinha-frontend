import { Dispatch, SetStateAction } from "react";
import { StatusType } from "../../shared/types";

export interface IHomeProps {
  status: [status: StatusType, setStatus: Dispatch<SetStateAction<StatusType>>]
  file: [setFile: Dispatch<SetStateAction<object>>]
}
