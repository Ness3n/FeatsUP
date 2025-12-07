package com.featup.routes

import com.featup.security.JwtConfig
import com.featup.services.UserService
import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import io.ktor.server.application.*
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

    if (user == null || user.contrasena != req.contrasena) {
      return@post call.respondText("Credenciales incorrectas")
    }

    val token = JwtConfig.generateToken(user.id!!, user.correo)

    call.respond(LoginResponse(token))

    println(">>> LOGIN RECIBIDO: ${req.correo} - ${req.contrasena}")
    println(">>> USER ENCONTRADO: $user")
  }
}

