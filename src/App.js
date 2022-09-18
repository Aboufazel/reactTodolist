import React , {useState} from 'react';
import './App.css';
import TodoItem from "./components/TodoItem";

function App() {
    const [state , setState] = useState({
        id: 0,
        title:'firs todo',
        discription:'my First todo list items',
        isDone:false,
    });

    const [formDate , setFormData] = useState({
        id:0,
        title:"",
        discription:"",
    });
    const [mode , setMode] = useState("create");

    const handelSelectForEdite = (todo) =>{
        setFormData(todo);
        setMode("update");
    };

    const handelSubmit = (e) =>{
        e.preventDefault();
        if(mode === "create"){
            setState([...state , {...formDate , id:Math.random()*1000}]);
        }else (
            setState(state.map((item) => (item.id === formDate.id ? formDate : item)))
        );
        setMode("create");

        setFormData({
            id:0,
            title:"",
            discription:"",
        });
    };

    const handelDeleteTodo = (id)=>{
        setState(state.filter((item) => item.id !== id));
    };

    const handelUpdateInputs = (e) =>{
        setFormData({...formDate , [e.target.name]: e.target.value});
    };

  return (
      <div>
          <form onSubmit={handelSubmit} style={{margin:25}}>
              <label
                  style={{
                      padding: 5 ,
                      display:"block",
                  }}
              >title:</label>
              <input
                  type="text"
                  name = "title"
                  value={formDate.title}
                  onChange ={handelUpdateInputs}/>
              <label
                  style={{
                      padding: 5 ,
                      display:"block",
                  }}
              >discription:</label>
              <input
                  type="text"
                  name = "discription"
                  value={formDate.discription}
                  onChange ={handelUpdateInputs}/>

              <input style={{display:"block", marginTop:25}}
                     type={"submit"} value={"save"} onChange={handelSubmit}/>
          </form>
          <div>
              <TodoItem id={state.id} title={state.title} discription={state.discription} handelDelete={() =>handelDeleteTodo(state.id)} handelUpdate={() => handelSelectForEdite(state)}/>
          </div>
      </div>
  );
}

export default App;
