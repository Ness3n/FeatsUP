package com.featup.models

import kotlinx.serialization.Serializable

@Serializable
data class Mesa(
  val id: Int? = null,
  val name: String,
  val capacidad: Int,
  val disponible: Boolean = true
)
