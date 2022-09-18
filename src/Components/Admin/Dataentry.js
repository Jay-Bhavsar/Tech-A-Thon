import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'
// import '../../Components/register/reg.css'
import '../Admin/dataentry.css'
import {Link} from "react-router-dom"
export default function Dataentry() {

    const [user, setUser] = useState({
        
        // year: "",
        capacity: "",
        production: "",
        exports: "",
        email:"",
        email1:"",
        email2:"",
        email3:"",
        email4:"",
        
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const feed = () => {
        console.log("jay")
        const { capacity, production, exports,email,email1,email2,email3,email4} = user
        if (capacity && production && exports) {
            alert("Data feeded")
            axios.post("http://localhost:9004/feed", user)
                .then(res => console.log(res))
        } else {
            alert('Fill all data')
        }
        // history.push("/Admin")


        // .then(res => console.log(res))

        /////This is to be done after making backend

    }
    //   const history = useHistory()



    return (
        <>
            <div className="container1 ">
                <div className='data-entry'>
                    <center><h5> <i>Admin Panel</i> </h5> </center>
                    <br />
                    <div className="form">
                        {console.log("User", user)}
                        <h1 className='heading1'>Schedule a Meeting Through Error 404</h1>
                        {/* <div className="col-md-3">
                            <label for="validationDefault04" class="form-label">Name of the Meeting</label>
                            <select className="form-select" id="validationDefault04" onChange={handleChange} name="type" value={user.type} required>
                                <option>Type</option>
                                <option>Synthetic Fibres/Yarn</option>
                                <option>Polymers</option>
                                <option >Synthetic Rubber</option>
                                <option >Synthetic Detergent Intermediates</option>
                                <option >Performance Plastics</option>
                                <option >Total Basic Major Petrochemicals</option>
                            </select>
                        </div> */}
                        {/* <div className='mb-3'>
                            <label for="exampleInputEmail1" class="form-label">Year</label>
                            <input type="text" className="form-control" id="validationServer03" placeholder='Enter Year' name="year" value={user.year} onChange={handleChange} />
                        </div> */}
                        {/* <div className="col-md-3">
                            <label for="validationDefault04" class="form-label">Month</label>
                            <select className="form-select" id="validationDefault04" onChange={handleChange} name="month" value={user.month} required>
                                <option>Month</option>
                                <option>Janaury</option>
                                <option>Febuary</option>
                                <option >March</option>
                                <option >April</option>
                                <option >May</option>
                                <option >June</option>
                                <option >July</option>
                                <option >August</option>
                                <option >September</option>
                                <option >Octomber</option>
                                <option >November</option>
                                <option >December</option>
                            </select>
                        </div> */}
                        <div className='mb-3'>
                            <label for="exampleInputEmail1" class="form-label1">Name of the Meeting</label>
                            <input type="text" className="form-control" placeholder='Name of the Meeting' name="capacity" value={user.capacity} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Description of the meeting</label>
                            <input type="text" className="form-control" placeholder='Description of the meeting' name="production" value={user.production} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Date of the meeting</label>
                            <input type="date" className="form-control" placeholder='Date of the meeting' name="exports" value={user.exports} onChange={handleChange} />
                        </div>

                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Email of the Organizer of meeting (will receive email with link of the meeting)</label>
                            <input type="text" className="form-control" placeholder='Email ' name="email" value={user.email} onChange={handleChange} />
                        </div>

                        {/* <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">email of member 2</label>
                            <input type="text" className="form-control" placeholder='Date of the meeting' name="email1" value={user.email1} onChange={handleChange} />
                        </div> */}
                        {/* <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label"> email of member 3</label>
                            <input type="text" className="form-control" placeholder='Date of the meeting' name="email2" value={user.email2} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">email of member 4</label>
                            <input type="text" className="form-control" placeholder='Date of the meeting' name="email3" value={user.email3} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">email of member 5</label>
                            <input type="text" className="form-control" placeholder='Date of the meeting' name="email4" value={user.email4} onChange={handleChange} />
                        </div> */}


                        {/* <div className='mb-3'>
                            <label for="exampleInputEmail1" class="form-label1">Name of the Meeting</label>
                            <input type="text" className="form-control" placeholder='Name of the meet' name="name" value={user.name} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Description of the meet</label>
                            <input type="text" className="form-control" placeholder='Description of the meet' name="description" value={user.description} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Date of Meeting</label>
                            <input type="date" className="form-control" placeholder='Date of meeting' name="date" value={user.date} onChange={handleChange} />
                        </div> */}
                        {/* <div class="mb-3">
                            <label for="formFile" class="form-label">Upload Digital Signature</label>
                            <input class="form-control-btn" type="file" className="form-control"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I hereby declare that the data entered is accurate and correct</label>
                        </div> */}
                        <div className=''>
                            <Link type="submit" to="/schedule"  class="jkbtn" onClick={feed}>Schedule</Link>
                            {/* <button type="submit" class="btn-primary col-md-3"> <a href="/main">LogOut</a></button> */}
                        </div>

                        {/* <button type="submit" class="btn btn-primary" onClick={() => history.push("/login")}>Login</button> */}
                    </div>
                </div>

            </div>
        </>
    )
}
