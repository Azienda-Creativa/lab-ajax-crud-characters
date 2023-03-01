class APIHandler {
  constructor() {
    this.api = axios.create({
      BASE_URL: "http://127.0.0.1:5500/index.html",
    })
  }

  getFullList() {
    this.api.get("/characters").then((res) => res.data)
  }

  getOneRegister() {
    let data = req.params
    this.api.get(`/characters/${characterId}`).then((res) => res.data)
  }

  createOneRegister(characterInfo) {
    let data = req.body
    this.api.post(`/characters`, characterInfo).then((res) => res.send(data))
  }

  updateOneRegister(characterId, characterInfo) {
    this.api
      .put(`/characters/${characterId}`, characterInfo)
      .then((res) => res.data)
  }

  deleteOneRegister(characterId) {
    this.api.delete(`/characters/${characterId}`).then((res) => res.data)
  }
}

module.exports = APIHandler
