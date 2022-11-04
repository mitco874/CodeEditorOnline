import { useState } from "react";

export const useSelect = (defaulValue='') => {
    const [language,setLanguage]=useState(defaulValue);

    const onSelectChange=(newLanguage)=>{
      setLanguage(newLanguage)
    }
    
return{
        language,onSelectChange
}
}
