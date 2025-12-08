package com.featup.routes

import com.featup.security.JwtConfig
import com.featup.services.UserService
import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import kotlinx.serialization.Serializable

@Serializable
data class LoginRequest(
  val correo: String,
  val contrasena: String
)

@Serializable
data class LoginResponse(
  val token: String
)

fun Route.authRoutes() {

  val userService = UserService()

  post("/login") {
    val req = call.receive<LoginRequest>()
    val user = userService.getByCorreo(req.correo)

    if (user == null) {
      return@post call.respondText("Correo no encontrado")
    }

    if (user.contrasena != req.contrasena) {
      return@post call.respondText("Contraseña incorrecta")
    }

    val token = JwtConfig.generateToken(user.id!!, user.correo, user.rol)

    call.respond(
      mapOf(

        "token" to token,
        "rol" to user.rol,
        "id" to user.id
      )
    )

  }
}
