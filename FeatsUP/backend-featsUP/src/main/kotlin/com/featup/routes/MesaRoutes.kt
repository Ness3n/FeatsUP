package com.featup.routes

import com.featup.models.Mesa
import com.featup.services.MesaService
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.mesasRoutes() {

  val service = MesaService()

  route("/mesas") {

    get {
      call.respond(service.getAll())
    }

    get("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull()
        ?: return@get call.respondText("ID inválido")
      val mesa = service.getById(id)
        ?: return@get call.respondText("Mesa no encontrada")

      call.respond(mesa)
    }

    post {
      val mesa = call.receive<Mesa>()
      call.respond(service.create(mesa))
    }

    delete("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull()
        ?: return@delete call.respondText("ID inválido")

      val deleted = service.delete(id)
      call.respond(if (deleted) "Eliminado" else "No encontrado")
    }
  }
}
