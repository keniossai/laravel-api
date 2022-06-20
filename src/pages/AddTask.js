import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class AddTask extends Component{

    state = {
        name: "",
        description: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.value]: e.target.value
        })
    }
    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className='card'>
                            <div className="card-header">
                                <h4>Add Task
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Task Name</label>
                                        <input type="text" name="task" onChange={this.handleChange} value={this.sate.task} className='form-control' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Description</label>
                                        <textarea className='form-control' onChange={this.handleChange} name="description" value={this.state.description} id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <button type='submit' className='btn btn-warning'>Assign Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask