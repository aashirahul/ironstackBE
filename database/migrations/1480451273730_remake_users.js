'use strict'

const Schema = use('Schema')

class RemakeUsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('firstName')
      table.string('lastName')
      table.string('email').unique()
      table.string('userName').unique()
      table.string('password')
      table.boolean('admin').defaultTo(false)
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = RemakeUsersTableSchema
