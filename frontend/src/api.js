import axios from 'axios'
const url = '/api/blogs';

export default class API {
    //get all blogs from server
    static async getAllBlogs(){
        const res = await axios.get(url);
        return res.data;
    }
    static async viewBlog(id){
        //view a single blog record
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }
    static async createBlog(blog){
        //create a blog
        const res = await axios.post(url, blog);
        return res.data
    }
    static async updateBlog(id, blog){
        //update an existing blog
        const res = await axios.patch(`${url}/${id}`, blog);
        return res.data
    }
    static async deleteBlog(id){
        //delete an existing blog
        const res = await axios.delete(`${url}/${id}`);
        return res.data
    }
}
