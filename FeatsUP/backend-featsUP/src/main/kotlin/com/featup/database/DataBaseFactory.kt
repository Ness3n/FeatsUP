package com.featup.database

import com.featup.database.tables.MesasTable
import io.ktor.server.application.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction
import com.featup.models.Mesa
import com.featup.models.Users

object DatabaseFactory {
  fun init(app: Application) {
    val url = "jdbc:postgresql://localhost:5432/featsup"
    val driver = "org.postgresql.Driver"
    val user = "postgres"
    val password = "1234"

    Database.connect(url, driver, user, password)

    transaction {
      SchemaUtils.create(Users, MesasTable)
    }

    println(">>> PostgreSQL conectado y tablas listas")
  }
}
