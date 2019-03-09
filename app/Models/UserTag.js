'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserTag extends Model {
  static boot () {
    super.boot()

    this.addGlobalScope(
      query => {
        query.where('active', true)
      },
      'foo'
    )
  }
}

module.exports = UserTag
