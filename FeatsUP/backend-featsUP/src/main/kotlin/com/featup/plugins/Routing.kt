package com.featup.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import com.featup.routes.*
import io.ktor.server.routing.delete

fun Application.configureRouting() {
  routing {
    get("/") {
      call.respondText("FeatsUP API")
    }
    userRoutes()
    mesasRoutes()
    reservacionRoutes()
    comprobanteRoutes()
  }
}
