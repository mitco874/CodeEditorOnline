export const OptionsSelector = ({defaultValue}) => {
  return (
    <select class="form-select">
    <option defaultValue={defaultValue} >{defaultValue}</option>
    {/* <option value="python">Python</option>
    <option value="node">JavaScript</option> */}
  </select>
  )
}
