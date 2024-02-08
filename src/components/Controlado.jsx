import { useState } from "react";
const Controlado = () =>{
    const [todo, setTodo] = useState ({
        title: 'todo#1',
        description: 'descripcion #1',
        state: 'pendiente',
        priority: true,
    })
    const {title,description,state,priority} = todo;

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        console.log(title,description,state);
    }
    const handleChange = (e) =>{
        const {name,type,checked,value} = e.target;
       setTodo({
            ...todo, [name]:type === "checkbox" ? checked: value,
       })
    };
        return (
            <form onSubmit={handleSubmit} >
              <input 
                    type="text" 
                    placeholder="Ingresa Valores" 
                    className="form-control mb-2"
                    name="title"
                    value={title}
                    onChange={handleChange}>
              </input>
              <textarea
                    className="form-control mb-2 " 
                    placeholder="Ingresa Descripción"
                    name="description"
                    value={description}
                    onChange={handleChange}
              />
              <div className="form-check mb-2">
                <input 
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"  
                    checked={priority} 
                    onChange={handleChange}             
                />
                
                <label htmlFor="inputCheck">
                    dar prioridad
                </label>
              </div>
              <select className="form-select mb-2" 
                    name="state" 
                    value={state} 
                    onChange={handleChange}>
                        <option value="pendiente">Pendiente</option>  
                        <option value="completado">Completado</option>  
              </select>  
              <button 
                    type="submit" 
                    className="btn btn-success">
                    Enviar
             </button>
            </form>
        );
      };

export default Controlado;