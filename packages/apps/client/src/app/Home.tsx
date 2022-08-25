import { api } from "../api"
import { useHello } from "../api/hello"
import { environment } from "../environments/environment"

export const Home = () => {
  const { data } = useHello()

  console.log({ environment }, api)
  return (
    <div>
      <p>Message recieved from backend (URL: {environment.apiUrl}) is:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Home
