package com.featup.routes

import com.featup.services.ReservacionService
import com.featup.models.Reservacion
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.request.*

fun Route.reservacionRoutes() {
  val service = ReservacionService()
  route("/reservaciones") {
    get {
      call.respond(service.getAll())
    }
    get("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull() ?: return@get call.respondText("ID inválido")
      val r = service.getById(id) ?: return@get call.respondText("No encontrada")
      call.respond(r)
    }
    get("/usuario/{uid}") {
      val uid = call.parameters["uid"]?.toIntOrNull() ?: return@get call.respondText("ID inválido")
      call.respond(service.getByUsuario(uid))
    }
    post {
      val r = call.receive<Reservacion>()
      call.respond(service.create(r))
    }
    delete("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull() ?: return@delete call.respondText("ID inválido")
      val ok = service.delete(id)
      call.respond(if (ok) "Eliminado" else "No encontrado")
    }
  }
}
