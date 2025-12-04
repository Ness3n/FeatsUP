package com.featup.models

import org.jetbrains.exposed.sql.Table

data class Mesa(
  val id: Int? = null,
  val name: String,
  val capacidad: Int
)
