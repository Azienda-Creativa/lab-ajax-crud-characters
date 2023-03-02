class APIHandler {
  constructor() {
    this.api = axios.create({
      BASE_URL: "http://localhost:8000",
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    })
  }

  getFullList() {
    return this.api.get("/characters").then((res) => res.data)
  }

  getOneRegister() {
    let data = req.body
    return this.api.get(`/characters/${characterId}`).then((res) => res.data)
  }

  createOneRegister(characterInfo) {
    const { name, occupation, weapon, cartoon } = req.body
    return this.api
      .post(`/characters`, characterInfo)
      .then((res) => JSON.stringify(res.data))
      .catch((err) => console.log(err))
  }

  updateOneRegister(characterId, characterInfo) {
    return this.api
      .put(`/characters/${characterId}`, characterInfo)
      .then((res) => res.data)
  }

  deleteOneRegister(characterId) {
    return this.api.delete(`/characters/${characterId}`).then((res) => res.data)
  }
}

module.exports = APIHandler
