package com.featup.security

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import io.ktor.server.config.*
import java.util.Date

object JwtConfig {

  private lateinit var secret: String
  private lateinit var issuer: String
  private lateinit var audience: String
  private lateinit var realm: String
  private var expiresIn: Long = 60
  private lateinit var algorithm: Algorithm

  fun init(config: ApplicationConfig) {
    secret = config.property("jwt.secret").getString()
    issuer = config.property("jwt.issuer").getString()
    audience = config.property("jwt.audience").getString()
    realm = config.property("jwt.realm").getString()
    expiresIn = config.property("jwt.expiresInMinutes").getString().toLong()

    algorithm = Algorithm.HMAC256(secret)
  }

  fun generateToken(userId: Int, correo: String, rol: String): String {
    return JWT.create()
      .withIssuer(issuer)
      .withAudience(audience)
      .withClaim("userId", userId)
      .withClaim("correo", correo)
      .withClaim("rol", rol)
      .withExpiresAt(Date(System.currentTimeMillis() + expiresIn * 60 * 1000))
      .sign(algorithm)
  }

  fun getVerifier(): JWTVerifier =
    JWT.require(algorithm)
      .withIssuer(issuer)
      .withAudience(audience)
      .build()

  fun getRealm() = realm
}
