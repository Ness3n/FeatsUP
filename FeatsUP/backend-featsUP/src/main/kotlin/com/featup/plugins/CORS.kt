package com.featup.plugins

import io.ktor.server.application.*
import io.ktor.http.*
import io.ktor.server.plugins.cors.routing.*

fun Application.configureCORS() {
  install(CORS) {
    allowMethod(HttpMethod.Get)
    allowMethod(HttpMethod.Post)
    allowMethod(HttpMethod.Put)
    allowMethod(HttpMethod.Delete)
    allowHeader(HttpHeaders.ContentType)
    allowCredentials = true
    anyHost() // DEV only; restrict in prod
  }
}
