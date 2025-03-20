import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const Home = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const handleSearch = () => {
    navigate(`/search?q=${query}`)
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full"
        />
        <Button onClick={handleSearch}>search</Button>
      </div>
    </div>
  )
}
export default Home