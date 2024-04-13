import { profileaction } from "../slices/profileSlices";
import { toast } from "react-toastify";
import request from "../../utils/requst";
import { authaction } from "../slices/authSlices";
export function profiledata(idUser) {
  return async (dispath) => {
    try {
      const { data } = await request.get(`api/users/profile/${idUser}`);
      // هاذ dispath هو الذي يربط مع ملف ../slices/authSlices لكي يقوم ب اخذ المعلومات لي user بعدما كانت null
      dispath(profileaction.profiledata(data));
      dispath(authaction.setuserphoto(data.profilePhoto));
      //modify data iin loccal storge

      const user = JSON.parse(localStorage.getItem("infouser"));
      console.log(user);
      user.profilePhoto = data.profilePhoto;
      localStorage.setItem("infouser", JSON.stringify(user));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    }
  };
}

export function uploadprofilephoto(newphoto) {
  return async (dispath, getState) => {
    try {
      const state = getState();
      const { data } = await request.post(
        `api/users/profile/uplode-photo-profil`,
        newphoto,
        {
          headers: {
            Authorization: "Bearer " + state.auth.user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      toast.success(data.message);
      dispath(profileaction.profileuploadePhoto(data.profilePhoto));
      dispath(authaction.setuserphoto(data.profilePhoto));
      // هاذ dispath هو الذي يربط مع ملف ../slices/authSlices لكي يقوم ب اخذ المعلومات لي user بعدما كانت null
    } catch (error) {
      // console.log(error);
      // toast.error(error);
    }
  };
}

export function updateuser(userId, profile) {

  return async (dispath, getState) => {
    try {
      const { data } = await request.put(
        `api/users/profile/${userId}`,
        profile,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispath(profileaction.profileupdate(data));
      dispath(authaction.setusername(data));
      const user = JSON.parse(localStorage.getItem("infouser"));
      console.log(user);
      user.username = data?.username;
      localStorage.setItem("infouser", JSON.stringify(user));

    } catch (error) {
      // console.log(error);
      // toast.error(error);
    }
  };
}
