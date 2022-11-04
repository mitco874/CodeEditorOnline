import {exportFile} from "../../../utils/exportFile"

export const RunCodeButton = (code) => {
  
  const saveCode=()=>{
    exportFile(code,'test','java')
  }


  return (
<button className="btn btn-primary">Run Code</button>
  )
}
