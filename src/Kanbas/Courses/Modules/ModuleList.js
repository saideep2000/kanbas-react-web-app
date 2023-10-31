import {useParams} from "react-router";
import React from "react";
import {useLocation} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  resetModule,
} from "./modulesReducer";

function ModuleList() {
    const {courseId} = useParams();
    const {pathname} = useLocation();

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    
    return (
        <ul className="list-group pb-2">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                <input className = "rounded" value={module.name} style={{width: '300px'}} placeholder="Module name"
                        onChange={ (e) => dispatch(setModule({ ...module, name: e.target.value })) }
                ></input>
                <input className = "rounded" value={module.description} style={{width: '550px'}} placeholder="Description"
                        onChange={(e) =>  dispatch(setModule({...module, description: e.target.value}))}
                ></input>

                <button className="btn btn-success"
                onClick={() => dispatch(addModule({ ...module, course: courseId }), dispatch(resetModule()))}
                >Add</button>

                <button className="btn btn-primary" onClick={() => dispatch(updateModule(module), dispatch(resetModule()))}>Update</button>
            </div>

            <li className="list-group-item list-group-item-secondary border">
                <i className="fas fa-grip-vertical wd-custom-margin"></i>
                <i className="fa-solid fa-caret-down wd-custom-margin"></i> Resources
                <i className="fa-solid fa-ellipsis-vertical black float-end wd-custom-margin"></i>
                <i className="fa-solid fa-plus grey float-end wd-custom-margin"></i>

                <i className="fa-solid fa-caret-down float-end wd-custom-margin"></i>
                <i className="fa-solid fa-check-circle wd-color-green float-end wd-custom-margin"></i>
            </li>
            {
                modules.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li className={`list-group-item ${pathname.includes("Modules") ? "wd-green-border" : ""}`}>
                            <i className="fas fa-grip-vertical wd-custom-margin"></i>
                            <strong>{module.name}</strong>
                            <button className="btn btn-danger float-end" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                            <button className="btn btn-success float-end me-md-2" onClick={() => dispatch(setModule(module))}>Edit</button>
                            
                            <i className="fa-solid fa-ellipsis-vertical mt-2 black float-end wd-custom-margin"></i>
                            <i className="fa-solid fa-check-circle mt-2 wd-color-green float-end wd-custom-margin"></i>
                            
                            <p className="wd-padding-left">{module.description}</p>
                            
                        </li>
                        // <li key={index} className="list-group-item">
                        //     <h3>{module.name}</h3>
                        //     <p>{module.description}</p>
                        // </li>
                    ))
            }
        </ul>
    );
}

export default ModuleList;