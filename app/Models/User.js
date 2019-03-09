'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  tags () {
    return this.belongsToMany('App/Models/Tag')
      .pivotModel('App/Models/UserTag')
  }
}

module.exports = User
