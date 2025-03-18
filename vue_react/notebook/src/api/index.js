import axios from '@/utils/axios'

// 所有的请求
// 后端提供接口
export const login = async (username, password) => await axios.post('/login', {
  username,
  password
})

export const uploadAvatar = async () => await axios.post('/upload')

export const getUserInfor = async () => await axios.get('/user/getUserInfo')

export const updeteSignature = async (signature) => await axios.patch('/user/signature', {
  signature
})

export const getBillDetail = async (id) => await axios.get(`/bill/${id}`)