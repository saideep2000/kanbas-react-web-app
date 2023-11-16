import axios from "axios";
// const COURSES_URL = "https://kanbas-node-server-app-saideep-3f7fd5ee2ace.herokuapp.com/api/courses";
// const MODULES_URL = "https://kanbas-node-server-app-saideep-3f7fd5ee2ace.herokuapp.com/api/modules";

const API_BASE = process.env.REACT_APP_API_BASE || "https://kanbas-node-server-app-saideep-3f7fd5ee2ace.herokuapp.com/api" ;
const COURSES_URL = `${API_BASE}/courses`;
const MODULES_URL = `${API_BASE}/modules`;

export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
};

export const delModule = async (moduleId) => {
    const response = await axios
      .delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const upModule = async (module) => {
    const response = await axios.
      put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};


  
  