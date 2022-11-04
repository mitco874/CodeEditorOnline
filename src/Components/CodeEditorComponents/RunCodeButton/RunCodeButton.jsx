import {exportFile} from "../../../utils/exportFile"

export const RunCodeButton = (code) => {
  
  const saveCode=()=>{
    exportFile(code,'test','java')
  }

  const compile=()=>{
    saveCode()
    //compilar
    
    //ejecutar y mostrar en pantalla
  }
  
  return (
<button className="btn btn-primary" onClick={compile}>Run Code</button>
  )
}
