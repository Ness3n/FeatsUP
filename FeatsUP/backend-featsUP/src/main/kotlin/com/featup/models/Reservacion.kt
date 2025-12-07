package com.featup.models

import kotlinx.serialization.Serializable

@Serializable
data class Reservacion(
  val id: Int? = null,
  val usuarioId: Int,
  val mesaId: Int,
  val fechaReservacion: String,
  val horaReservacion: String,
  val estado: String = "ACTIVA"
)
