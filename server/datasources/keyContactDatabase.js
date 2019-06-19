const { DataSource } = require('apollo-datasource')

const authenticate = require('../utils/DSHelperFunctions/authenticate')

class KeyContactDatabase extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {
    this.context = config.context
  }

    async getKeyContactProfile(input) {
      try {
        let user_id = input.id
        // !input.user_id ? user_id = authenticate(app, req) : user_id = input.user_id
        const selectKeyContactProfile = {
          text: `SELECT * FROM seniorcare.key_contact WHERE id = $1`,
          values: [user_id]
        }
        const result = await this.context.postgres.query(selectKeyContactProfile)
        
        return result.rows[0]
      } catch (e) {
        throw e
      }
    }
  }

module.exports = KeyContactDatabase