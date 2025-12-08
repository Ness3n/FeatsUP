package com.featup.routes

import com.featup.security.JwtConfig
import com.featup.security.PasswordService
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
      return@post call.respondText("Credenciales incorrectas")
    }

    val passwordOk = PasswordService.verify(req.contrasena, user.contrasena)

    if (!passwordOk) {
      return@post call.respondText("Credenciales incorrectas")
    }

    val token = JwtConfig.generateToken(user.id!!, user.correo)

    call.respond(LoginResponse(token))

    println(">>> LOGIN OK: ${req.correo}")
  }
}
