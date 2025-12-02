package com.featup.database.tables

import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq

object MesasTable : Table("mesas") {
  val id = integer("id").autoIncrement()
  val name = varchar("name", 100)
  val capacidad = integer("capacidad")
  val disponible = bool("disponible").default(true)

  override val primaryKey = PrimaryKey(id)
}
