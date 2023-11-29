import axios from "../libs/axios"

export const postHomeMessage = async (message: string) => {
  return await axios.post("/posthomemessage", {
    message
  })
}

export const createAccessToken = async (username: string) => {
  return await axios.post("/createaccesstoken", {
    username
  })
}

export const getFirstTenMessages = async () => {
  return await axios.get("/getfirsttenmessages")
}

export const linkShortener = async (link: string) => {
  return await axios.post("/shortlink", {
    link
  })
}

export const getAllCountLinks = async () => {
  return await axios.get("/getallcountlinks");
}

export const getPexelsPhotos = async (query: string) => {
  return await axios.post(`/getpexelsphoto`, {
    query
  });
}