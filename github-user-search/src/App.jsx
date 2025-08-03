import { useState } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import { searchUsers } from './services/githubService'

function App() {
  const [users, setUsers] = useState([])

  const handleSearch = async (params) => {
    const results = await searchUsers(params)
    setUsers(results)
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">GitHub Advanced Search</h1>
      <Search onSearch={handleSearch} />
      <Results users={users} />
    </div>
  )
}

export default App;
