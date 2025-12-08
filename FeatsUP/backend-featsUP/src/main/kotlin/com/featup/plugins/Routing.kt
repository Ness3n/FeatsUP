package com.featup.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import com.featup.routes.*
import io.ktor.server.auth.authenticate
// IMPORTAR AQUÍ LA CLASE DE TU MODELO
import com.featup.models.LoginRequest // <-- ¡Asegúrate de esta línea!
import io.ktor.server.request.receive
import io.ktor.server.routing.delete

fun Application.configureRouting() {
  routing {
    get("/Login") {
      call.respond("FeatsUP API (funciona casi todo T.T)")
    }

    post("/Login") { // Asumo que esta es la ruta de login
      val datos = call.receive<LoginRequest>()
      val email = datos.correo
      val password = datos.contrasena

      call.respond("Login exitoso para el usuario: $email")
    }

    authenticate("auth-jwt") {
      get("/protegido") {
        call.respond("Acceso autorizado")
      }
    }

    authRoutes()
    userRoutes()
    mesasRoutes()
    reservacionRoutes()
    comprobanteRoutes()

  }
}
