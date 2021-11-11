import logo from './logo.svg';
import './App.css';
import { Button, Input,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';



function App() {

const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [diachi, setDiachi] = useState("")
const [list, setList] = useState([])
const [nameedit, setNameedit] = useState("")
const [phoneedit, setPhoneedit] = useState("")
const [diachiedit, setDiachiedit] = useState("")
const [idEdit, setIdEdit] = useState("")

function add(e){
  var user = {
    name: name,
    phone: phone,
    diachi: diachi
  }
  var temp = [...list]
  temp.push(user)
  setList(temp)
  setName("")
  setPhone("")
  setDiachi("")
}
function remove(user){
  var temp = [...list]
  temp = temp.filter(item => item != user)
  setList(temp)
}

function edit(item){
  setNameedit(item.name)
  setPhoneedit(item.phone)
  setDiachiedit(item.diachi)
  setIdEdit(item.id)
 
}

function save(){
  var newlist = list.map((item, index)=>{
    if(item.id == idEdit)
    {
      item.name = nameedit
      item.phone = phoneedit
      item.diachi = diachiedit
    }
    setNameedit("")
    setPhoneedit("")
    setDiachiedit("")
    return item
  })
  setList(newlist)
}


  return (
    <div className="App">
      <div>
        <div className="info"  >
          <span>Họ tên</span>
          <input type="text" placeholder="Họ tên" value={name} onChange={(e) => setName(e.target.value)} />
          <span>Số điện thoại</span>
          <input type="number" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <span>Địa chỉ</span>
          <input type="text" placeholder="Địa chỉ" value={diachi} onChange={(e) => setDiachi(e.target.value)}  />
          <button className="add" type="submit" onClick={() => add()}>Add student</button>
        </div><br/>

      <h4>Edit</h4>
      {/* edit */}
      <div className="info"  >
          <span>Họ tên</span>
          <input type="text" placeholder="Họ tên" value={nameedit} onChange={(e) => setNameedit(e.target.value)} />
          <span>Số điện thoại</span>
          <input type="number" placeholder="Số điện thoại" value={phoneedit} onChange={(e) => setPhoneedit(e.target.value)} />
          <span>Địa chỉ</span>
          <input type="text" placeholder="Địa chỉ" value={diachiedit} onChange={(e) => setDiachiedit(e.target.value)}  />
          <button className="add" type="submit" onClick={() => save()}>save</button>
        </div><br/>






        <table >
              <tr style={{background:"#d1caca",}}>
                    <th>Họ tên: </th>
                    <th>Số điện thoại </th>
                    <th>Địa chỉ </th>
                </tr>
          {
            list.map((item, index)=>{
              return(
                <tbody key={index}>
                
                <tr>
                  <th>
                  {item.name}
                  </th>
                  <th>
                  {item.phone}
                  </th>
                  <th>
                  {item.diachi}
                  <Button variant="danger" style={{marginLeft:30}} onClick={() => remove(item)}>Delete</Button>
                  <Button variant="success" style={{marginLeft:30}} onClick={() => edit(item)}>Edit</Button>
                  </th>
                </tr>
              </tbody>
              )
            })
            
          }
         </table>
      </div>

    </div>
  );
}

export default App;
