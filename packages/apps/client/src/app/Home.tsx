import { useHello } from "../api/hello"

export const Home = () => {
  const { data } = useHello()

  return (
    <div>
      <p>Message recieved from back is:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Home
