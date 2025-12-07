package com.featup.database

import org.jetbrains.exposed.sql.Table

object MesasTable : Table("mesas") {
  val id = integer("id").autoIncrement()
  val numeroMesa = integer("numero_mesa").uniqueIndex()
  val numeroSillas = integer("numero_sillas")
  val estado = varchar("estado", 20)
  val area = varchar("area", 30)

  override val primaryKey = PrimaryKey(id)
}
