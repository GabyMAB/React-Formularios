import { useState, useRef } from "react";
const NoControlado = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        setError();
        //console.log('me diste clic');
        //console.log(form.current);
        //console.log(new FormData(form.current));
        //CAPTURAR DATOS
        const data = new FormData(form.current);
        //console.log(...data.entries());
        const {title,description,state} = Object.fromEntries([...data.entries(),]);
        console.log(title,description,state);
        //VALIDAR DATOS
        if(!title.trim() ||!description.trim() || !state.trim())
         return setError("Llena todos los campos");
    }
    const form = useRef(null);
    const [error, setError] = useState("");

        return (
            <form onSubmit={handleSubmit} ref={form}>
              <input 
              type="text" 
              placeholder="Ingresa Valores" 
              className="form-control mb-2"
               name="title">
              </input>
              <textarea
               className="form-control mb-2 " 
              placeholder="Ingresa Descripción"
              name="description"
              />
              <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>  
                <option value="completado">Completado</option>  
              </select>  
              <button type="submit" 
              className="btn btn-primary">Enviar</button>
              {error !== "" && error}
            </form>
        );
      };

export default NoControlado;