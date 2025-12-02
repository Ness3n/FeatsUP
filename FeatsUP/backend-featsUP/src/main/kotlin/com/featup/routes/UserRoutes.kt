package com.featup.routes

import com.featup.models.User
import com.featup.services.UserService
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.userRoutes() {

  val service = UserService()

  route("/users") {

    get {
      call.respond(service.getAllUsers())
    }

    get("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull()
        ?: return@get call.respondText("ID inválido")

      val user = service.getUserById(id)
        ?: return@get call.respondText("Usuario no encontrado")

      call.respond(user)
    }

    post {
      val user = call.receive<User>()
      val created = service.createUser(user)
      call.respond(created)
    }

    delete("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull()
        ?: return@delete call.respondText("ID inválido")

      val deleted = service.deleteUser(id)
      call.respond(if (deleted) "Eliminado" else "No encontrado")
    }
  }
}
