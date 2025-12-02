package com.featup.services

import com.featup.database.tables.UsersTable
import com.featup.models.User
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.transactions.transaction

class UserService {

  fun getAllUsers(): List<User> = transaction {
    UsersTable.selectAll().map {
      User(
        id = it[UsersTable.id],
        name = it[UsersTable.name],
        email = it[UsersTable.email]
      )
    }
  }

  fun getUserById(id: Int): User? = transaction {
    UsersTable
      .selectAll()
      .where { UsersTable.id eq id }
      .map {
        User(
          id = it[UsersTable.id],
          name = it[UsersTable.name],
          email = it[UsersTable.email]
        )
      }
      .singleOrNull()
  }

  fun createUser(user: User): User = transaction {
    val id = UsersTable.insert {
      it[name] = user.name
      it[email] = user.email
    } get UsersTable.id

    user.copy(id = id)
  }

  fun deleteUser(id: Int): Boolean = transaction {
    UsersTable.deleteWhere { UsersTable.id eq id } > 0
  }
}
