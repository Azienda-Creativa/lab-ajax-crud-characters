class APIHandler {
  constructor() {
    this.name
    this.occupation
    this.weapon
    ;(this.cartoon = true),
      (this.api = axios.create({
        BASE_URL: "http://127.0.0.1:5500/index.html",
      }))
  }

  getFullList() {
    return this.api.get("/characters")
  }

  getOneRegister() {
    return this.api.get(`/characters/${characterId}`)
  }

  createOneRegister(characterInfo) {
    return this.api.post(`/characters`, characterInfo)
  }

  updateOneRegister(characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo)
  }

  deleteOneRegister(characterId) {
    return this.api.delete(`/characters/${characterId}`)
  }
}

module.exports = APIHandler
