import { OptionsSelector } from "../OptionsSelector/OptionsSelector";
import { RunCodeButton } from "../RunCodeButton/RunCodeButton";
import {useSelect} from "../../../Hooks/useSelect"
import { useFetch } from "../../../Hooks/useFetch";
import AceEditor from "react-ace";

export const EditorGrid = () => {
  const defaultLanguage='java';
  const codeURL='';

  const {language,onSelectChange}=useSelect(defaultLanguage);
  const {contain}=useFetch(codeURL);
  const {data,isLoading,hasError}=contain;
  // const {code}=data;
  const code =`public class nuevo{
    public static void main (String []args){
      System.out.println("this is a example code");
    }
  }`

  return (
    <div>
        <div className="row">
            <div className="col col-7"><OptionsSelector defaultValue={language} onSelectChange={onSelectChange}/></div>
            <div className="col col-5 align-self-end" code={code}><RunCodeButton/></div>
        </div>

      <AceEditor mode={language}
                theme="dracula"
                name="UNIQUE_ID_OF_DIV"
                fontSize={14}
                value={code}
                setOptions={{
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  }}
                editorProps={{ $blockScrolling: true }}
                style={{height:"50vh",width:'95%'}}/>

    </div>
  )
}
