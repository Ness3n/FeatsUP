package com.featup.models

import kotlinx.serialization.Serializable

@Serializable
data class Comprobante(
  val id: Int? = null,
  val reservacionId: Int,
  val usuarioId: Int,
  val mesaId: Int,
  val fechaReservacion: String,
  val horaReservacion: String,
  val estadoReservacion: String
)
