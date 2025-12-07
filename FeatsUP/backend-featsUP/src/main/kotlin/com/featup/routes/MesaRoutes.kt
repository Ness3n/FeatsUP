package com.featup.routes

import com.featup.services.MesaService
import com.featup.models.Mesa
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.request.*

fun Route.mesasRoutes() {
  val service = MesaService()
  route("/mesas") {
    get {
      call.respond(service.getAll())
    }
    get("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull() ?: return@get call.respondText("ID inválido")
      val mesa = service.getById(id) ?: return@get call.respondText("Mesa no encontrada")
      call.respond(mesa)
    }
    post {
      val mesa = call.receive<Mesa>()
      call.respond(service.create(mesa))
    }
    put("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull() ?: return@put call.respondText("ID inválido")
      val payload = call.receive<Mesa>()
      val updated = service.update(id, payload) ?: return@put call.respondText("No encontrado")
      call.respond(updated)
    }
    delete("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull() ?: return@delete call.respondText("ID inválido")
      val ok = service.delete(id)
      call.respond(if (ok) "Eliminado" else "No encontrado")
    }
  }
}
