import axios from 'axios'

export default class RestResource {

   constructor() {
       // ** this for local host json file **//
       axios.create({
           baseURL: 'http://localhost:8080/'
       })
   }

    async getMedicalServices() {
       let response = await axios.get('/medical-centers.json');
       return response;
    }

}
