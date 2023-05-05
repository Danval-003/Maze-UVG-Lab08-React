import { useState } from 'react'

const useMazeApi = () => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleRequest = async (width, height) => {
    setLoading(true)
    // fetch
    const fetchResponse = await fetch(
      `https://maze.uvgenios.online/?type=json&w=${width}&h=${height}`,
    )
    const JSONresponse = await fetchResponse.json()

    setResponse(JSONresponse)
    setLoading(false)
  }

  return [response, loading, handleRequest]
}

export default useMazeApi
