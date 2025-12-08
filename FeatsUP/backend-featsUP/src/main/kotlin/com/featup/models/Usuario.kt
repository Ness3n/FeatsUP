package com.featup.models

import kotlinx.serialization.Serializable

@Serializable
data class Usuario(
  val id: Int? = null,
  val nombre: String,
  val apellidos: String? = null,
  val correo: String,
  val contrasena: String,
  val fechaNacimiento: String? = null,
  val celular: String? = null,
  val rol: String = "usuario"
)
