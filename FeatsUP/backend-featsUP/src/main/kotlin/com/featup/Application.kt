package com.featup

import io.ktor.server.application.*
import io.ktor.server.routing.*
import com.featup.database.DatabaseFactory
import com.featup.configureHTTP
import com.featup.configureSerialization
import com.featup.configureMonitoring
import com.featup.routes.userRoutes   // ← IMPORT CORRECTO

fun main(args: Array<String>) {
  io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
  DatabaseFactory.init(this)

  configureHTTP()
  configureSerialization()
  configureMonitoring()

  configureRouting()   // ← SIEMPRE AL FINAL
}
