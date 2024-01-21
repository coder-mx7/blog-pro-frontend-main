import { authaction } from "../slices/authSlices";
import { toast } from "react-toastify";
import request from "../../utils/requst"
export function loginuser(user) {
  return async (dispath) => {
    try {

      const {data} = await request.post('api/auth/login',user)
      // هاذ dispath هو الذي يربط مع ملف ../slices/authSlices لكي يقوم ب اخذ المعلومات لي user بعدما كانت null
      dispath(authaction.login(data))
      localStorage.setItem('infouser',JSON.stringify(data))
    } catch (error) {
      toast.error(error.response.data)
      console.log(error);
    }
  };
}

export function regsteruser(user) {
  return async (dispath) => {
    try {

      const {data} = await request.post('api/auth/regsterd',user)
      // هاذ dispath هو الذي يربط مع ملف ../slices/authSlices لكي يقوم ب اخذ المعلومات لي user بعدما كانت null
      dispath(authaction.register(data.message))
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  };
}

export function logautuser() {
  return  (dispath) => {
    dispath(authaction.logaut())
    localStorage.removeItem("infouser")
    localStorage.removeItem("profile")

  };
}
