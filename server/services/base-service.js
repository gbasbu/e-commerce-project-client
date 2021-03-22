module.exports = class Service {
    
    async find(itemId) {
        return this.model.findById(itemId)
    }

    async add(item) {
      return this.model.create(item)
    }

    async  del(itemId) {
        return this.model.deleteOne({ _id: itemId })
      }
  
    async update(itemId, data) {
        return this.model.findByIdAndUpdate({ _id: itemId }, data )
      }

  }
  