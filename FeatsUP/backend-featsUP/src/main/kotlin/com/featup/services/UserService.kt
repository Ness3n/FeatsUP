package com.featup.services

import com.featup.models.User
import com.featup.models.Users
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

class UserService {

  fun getAllUsers(): List<User> = transaction {
    Users.selectAll().map {
      User(
        id = it[Users.id],
        name = it[Users.name],
        email = it[Users.email]
      )
    }
  }

  fun getUserById(id: Int): User? = transaction {
    Users.select { Users.id eq id }.mapNotNull {
      User(
        id = it[Users.id],
        name = it[Users.name],
        email = it[Users.email]
      )
    }.singleOrNull()
  }

  fun createUser(user: User): User = transaction {
    val id = Users.insertAndGetId {
      it[name] = user.name
      it[email] = user.email
    }.value

    user.copy(id = id)
  }

  fun deleteUser(id: Int): Boolean = transaction {
    Users.deleteWhere { Users.id eq id } > 0
  }
}
