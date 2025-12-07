package com.featup.models

import kotlinx.serialization.Serializable

@Serializable
data class LoginRequest(
  val correo: String,
  val contrasena: String
)
