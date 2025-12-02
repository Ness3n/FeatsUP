package com.featup

import io.ktor.server.application.*
import com.featup.database.DatabaseFactory
import com.featup.configureHTTP
import com.featup.configureSerialization
import com.featup.configureMonitoring
import com.featup.configureRouting

fun main(args: Array<String>) {
  io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
  DataBaseFactory.init(this)
  configureHTTP()
  configureSerialization()
  configureMonitoring()
  configureRouting()
}
