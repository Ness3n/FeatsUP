package com.featup.database

import io.ktor.server.application.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

object DatabaseFactory {

  fun init(app: Application) {

    val config = app.environment.config

    val driver = config.property("ktor.database.driver").getString()
    val url = config.property("ktor.database.url").getString()
    val user = config.property("ktor.database.user").getString()
    val password = config.property("ktor.database.password").getString()

    Database.connect(
      url = url,
      driver = driver,
      user = user,
      password = password
    )

    // Aquí luego creas las tablas si las defines en Exposed
    transaction {
      // SchemaUtils.create(Users, Roles, Reservas)
    }
  }
}
