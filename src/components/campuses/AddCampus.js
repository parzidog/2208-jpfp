import React from 'react'
import ReactDOM from 'react-dom'
import List from '../dbList'
import Campus from './Campus'

const Form = ()=> {

  const [form, setForm]=React.useState({
        id:"",
        name:"",
        imgUrl:'',
        address:'',
        description:''
      });

    const [campuses, setCampuses] = React.useState(List.campuses)
    const [list, setList]=React.useState([])

    React.useEffect(()=>{
        setList(campuses);
    });

    const handleChange = prop=> event=>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setCampuses([...campuses,form]);
        setForm({
          id:"",
          name:"",
          imgUrl:'',
          address:'',
          description:''
        })
  }

  let itemsEle = list.map((itm,idx)=>
    <div key={idx}>
      <Campus data={itm}/>
    </div>
  )

    return (
      <div id='allCampuses'>
        <div className='allCampuses'>
          {itemsEle}
        </div>
        <h1>::ADD A NEW CAMPUS::</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={form.name} onChange={handleChange("name")} placeholder={'Campus Name'}/><br/>
          <input type='text' value={form.imgUrl} onChange={handleChange("imgUrl")} placeholder={'Image URL'}/><br/>
          <input type='text' value={form.address} onChange={handleChange("address")} placeholder={'Address'}/><br/>
          <input type='description' value={form.description} onChange={handleChange("description")} placeholder={'Description'}/><br/>
          <input type='submit' value={'Submit'}/>
        </form>
      </div>
    )
  }

export default Form;