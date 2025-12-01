package com.featup.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respond(mapOf("message" to "FeatsUP API está funcionando!"))
        }
        
        get("/health") {
            call.respond(mapOf("status" to "OK", "service" to "FeatsUP Backend"))
        }
    }
}
