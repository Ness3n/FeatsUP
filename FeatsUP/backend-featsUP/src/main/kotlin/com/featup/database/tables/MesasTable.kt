package com.featup.database.tables

import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq

object MesasTable : IntIdTable("mesas") {
  // Ya no necesitas definir la columna 'id' ni 'primaryKey', IntIdTable lo hace por ti.
  val name = varchar("name", 100)
  val capacidad = integer("capacidad")
  val disponible = bool("disponible").default(true)

  // Ojo: La columna ID ahora se accede como 'id' (de IntIdTable),
  // que es de tipo Column<EntityID>
}
