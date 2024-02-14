const get = async<T>(url: string) => {
  try {
    const response = await fetch(url)
    return await response.json() as T
  } catch (error) {
    console.error(error);
  }
}
const post = async<T>(url: string, body?) => {
  try {
    const response = await fetch(url, {
      body: JSON.stringify(body), method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    })
    return await response.json() as T
  } catch (error) {
    console.error(error);
  }
}
