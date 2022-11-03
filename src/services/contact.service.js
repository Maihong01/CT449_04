import createApiClient from "./api.services";

class ContactService {
    constructor(baseUrl = "/api/contact") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/",data)).data;
    }
    async deleteAll(){
        return (await this.api.delete("/")).data;
    }
    async get(id){
        return (await this.api.get(`/${id}`)).data;
    }
    async uptate(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async detele(id){
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactService();