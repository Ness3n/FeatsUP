package com.featup.database

import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.javatime.date
import org.jetbrains.exposed.sql.javatime.time
import org.jetbrains.exposed.sql.javatime.datetime

object ReservacionesTable : Table("reservaciones") {
  val id = integer("id").autoIncrement()
  val usuarioId = integer("usuario_id").references(UsuariosTable.id)
  val mesaId = integer("mesa_id").references(MesasTable.id)
  val fechaReservacion = date("fecha_reservacion")
  val horaReservacion = time("hora_reservacion")
  val estado = varchar("estado", 20)
  val creadoEn = datetime("creado_en")

  override val primaryKey = PrimaryKey(id)
}
