package com.featup.models

import kotlinx.serialization.Serializable

@Serializable
data class Mesa(
  val id: Int? = null,
  val numeroMesa: Int,
  val numeroSillas: Int,
  val estado: String = "DISPONIBLE",
  val area: String
)
