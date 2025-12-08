package com.featup.plugins

import io.ktor.server.config.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils
import com.featup.database.*
import org.jetbrains.exposed.sql.StdOutSqlLogger import org.jetbrains.exposed.sql.addLogger


object DatabaseFactory {
  fun init(config: ApplicationConfig) {
    val dbConfig = config.config("database")
    val url = dbConfig.property("url").getString()
    val driver = dbConfig.property("driver").getString()
    val user = dbConfig.property("user").getString()
    val password = dbConfig.property("password").getString()

    Database.connect(url = url, driver = driver, user = user, password = password)

    transaction {
      SchemaUtils.createMissingTablesAndColumns(
        UsuariosTable,
        MesasTable,
        ReservacionesTable,
        ComprobantesTable
      )
    }
    println(">>> Conexión a PostgreSQL iniciada correctamente")

    transaction {
      addLogger(StdOutSqlLogger)
    }
    println(">>> CONECTANDO A: ${config.property("database.url").getString()}")
  }

}
