package com.featup.routes

import com.featup.services.ComprobanteService
import com.featup.models.Comprobante
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import io.ktor.server.routing.delete

fun Route.comprobanteRoutes() {
  val service = ComprobanteService()

  route("/comprobantes") {

    get {
      call.respond(service.getAll())
    }

    get("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull()
        ?: return@get call.respondText("ID inválido")
      val c = service.getById(id)
        ?: return@get call.respondText("No encontrado")
      call.respond(c)
    }

    post {
      val c = call.receive<Comprobante>()
      call.respond(service.create(c))
    }

    delete("/{id}") {
      val id = call.parameters["id"]?.toIntOrNull()
        ?: return@delete call.respondText("ID inválido")

      val ok = service.delete(id)

      if (ok) {
        call.respondText("Comprobante eliminado")
      } else {
        call.respondText("No encontrado")
      }
    }
  }
}
