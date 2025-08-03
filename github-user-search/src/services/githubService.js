import axios from 'axios';
const GIT_HUB_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY 


export const fetchUserData = async ({username, location , minRepos}) =>{
  let query = ""

  if (username) query += `${username} in:login`
  if (location) query += `location:${location}`
  if (minRepos) query += `repos:>=${minRepos}`

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`

  try{
    
    const {data} = await axios.get(url, {
      headers:{
        Authorization: `token ${GIT_HUB_KEY}`
      }
    })

    const detailedUsers = await Promise.all(
      data.items.map(async (user) => {
        const {data: detail} = await axios.get(user.url, {
          headers:{
            Authorization: `token ${GIT_HUB_KEY}`
          }
        })
      })
    )
    return (detail)
  }catch(error){
    console.error(error)
  }
}


