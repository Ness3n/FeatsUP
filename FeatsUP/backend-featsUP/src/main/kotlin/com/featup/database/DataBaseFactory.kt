package com.featup.database

import com.featup.database.tables.UsersTable
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction
import io.ktor.server.application.*

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

    println(">>> Conexión a PostgreSQL iniciada correctamente")

    transaction {
      SchemaUtils.create(UsersTable)
    }
  }
}
