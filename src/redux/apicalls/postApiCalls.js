import request from "../../utils/requst"
import { postaction } from "../slices/postsSlices";





export function getposts() {
  return async (dispath) => {
    try {

      const {data} = await request.get('api/posts')
      dispath(postaction.postdata(data))
    } catch (error) {
      console.log(error);
    }
  };
}

export function getpostbyid(id) {
  return async (dispath,getState) => {
    try {

      const {data} = await request.get(`api/posts/${id}`)
      dispath(postaction.postid(data))
    } catch (error) {
      console.log(error);
    }
  };
}


export function getpostcategorts(category) {
  return async (dispath) => {
    try {

      const {data} = await request.get(`api/posts/category/${category}`)
      dispath(postaction.postcate(data))
    } catch (error) {
      console.log(error);
    }
  };
}


export function createposte(newpost) {
  return async (dispath,getState) => {
    dispath(postaction.setloading())

    try {

      const {data} = await request.post(`api/posts`,newpost,
      {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      })
      console.log(data);
      dispath(postaction.setIsPostCreatd())
      setTimeout(() => dispath(postaction.clearIsPostCreatd()), 400);
    } catch (error) {
      console.log(error);
    }
  };
}
