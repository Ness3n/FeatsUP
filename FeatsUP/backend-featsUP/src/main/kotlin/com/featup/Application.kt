package com.featup

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import com.featup.plugins.DatabaseFactory
import com.featup.plugins.configureRouting
import com.featup.plugins.configureSerialization
import com.featup.plugins.configureCORS
import com.featup.plugins.configureJWT

fun main(args: Array<String>) = EngineMain.main(args)

fun Application.module() {
  DatabaseFactory.init(environment.config)
  configureSerialization()
  configureCORS()
  configureJWT()
  configureRouting()
}
