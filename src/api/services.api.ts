import axios from "../libs/axios"

export const postHomeMessage = async (message: string) => {
  return await axios.post("/posthomemessage", {
    message
  })
}