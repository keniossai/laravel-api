import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class AddTask extends Component{
    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className='card'>
                            <div className="card-header">
                                <h4>Add Task
                                    <Link to={'add-task'} className='btn btn-primary btn-sm float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Task Name</label>
                                        <input type="text" className='form-control' />
                                    </div>
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