package com.featup.models

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.Table

@Serializable
data class User(
  val id: Int? = null,
  val name: String,
  val email: String
)

object Users : Table() {
  val id = integer("id").autoIncrement()
  val name = varchar("name", 100)
  val email = varchar("email", 150)

  override val primaryKey = PrimaryKey(id)
}
