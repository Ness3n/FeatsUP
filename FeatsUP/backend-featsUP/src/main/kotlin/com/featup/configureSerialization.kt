package com.featup

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*

import kotlinx.serialization.json.Json

fun Application.configureSerializationJSOn() {
  install(ContentNegotiation) {
    json(
      Json {
        prettyPrint = true
        ignoreUnknownKeys = true
        isLenient = true
      }
    )
  }
}
