package com.featup

import com.featup.database.DatabaseFactory
import io.ktor.server.application.*
import io.ktor.server.plugins.calllogging.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json
import com.featup.routes.*
import io.ktor.server.routing.*

fun Application.module() {

  // Init database
  DatabaseFactory.init(this)

  // Logging
  install(CallLogging)

  // CORS
  install(CORS) {
    anyHost()
    allowHeader("*")
    allowMethod(io.ktor.http.HttpMethod.Post)
    allowMethod(io.ktor.http.HttpMethod.Get)
    allowMethod(io.ktor.http.HttpMethod.Delete)
  }

  // Serialization
  install(ContentNegotiation) {
    json(
      Json {
        prettyPrint = true
        ignoreUnknownKeys = true
        isLenient = true
      }
    )
  }

  // Routes
  routing {
    userRoutes()
    mesasRoutes()
  }
}
