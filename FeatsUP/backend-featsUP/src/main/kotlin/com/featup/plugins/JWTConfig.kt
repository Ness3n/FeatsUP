package com.featup.plugins

import com.featup.security.JwtConfig
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*

fun Application.configureJWT() {

  JwtConfig.init(environment.config)

  install(Authentication) {
    jwt("auth-jwt") {
      realm = JwtConfig.getRealm()

      verifier(JwtConfig.getVerifier())

      validate { credential ->
        val userId = credential.payload.getClaim("userId").asInt()
        val correo = credential.payload.getClaim("correo").asString()

        if (userId != null && correo != null) JWTPrincipal(credential.payload)
        else null
      }
    }
  }
}
