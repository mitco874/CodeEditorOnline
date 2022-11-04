import { Console } from "../Console/Console"
import { Description } from "../Description/Description"
import { EditorGrid } from "../EditorGrid/EditorGrid"

export const PracticeCodeEditor = ({ title, problemDescription }) => {
  return (
    <div style={{height:'90vh'}}>
      <h2 className="text-center" > {title} </h2>
      <section className="container">
        <div className="row">

          <div className="col-5"><Description description={problemDescription}/></div>
          <div className="col-7 border border-primary"  style={{height:'60vh'}}><EditorGrid/></div>

        </div>

        <div className="col col-12 border border-primary"><Console/></div>

      </section>
    </div>
  )
}

PracticeCodeEditor.defaultProps={
  title:"titulo de la practica interactiva",
  problemDescription:"esta es la descripcion del ejemplo a resolver mediante codigo en el lenguaje de programacion java"

}

