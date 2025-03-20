import { useRequest } from "ahooks"
import Mock from "mockjs"
function getusername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}
const App = () => {
  const { data, error, loading } = useRequest(
    getusername
  )
  return (
    <div>
      {loading && <div>loading</div>}
      {data && <div>Username:{data}</div>}
    </div>
  )
}
export default App