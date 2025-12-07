package com.featup

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import com.featup.plugins.DatabaseFactory
import com.featup.plugins.configureRouting
import com.featup.plugins.configureSerialization
import com.featup.plugins.configureCORS

fun main(args: Array<String>) = EngineMain.main(args)

fun Application.module() {
  DatabaseFactory.init(environment.config)
  configureSerialization()
  configureCORS()
  configureRouting()
}
