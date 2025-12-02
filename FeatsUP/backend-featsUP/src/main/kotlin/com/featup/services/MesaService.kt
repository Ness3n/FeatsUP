package com.featup.services

import com.featup.models.Mesa
import com.featup.database.tables.MesasTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.transactions.transaction

class MesaService {

  fun getAll(): List<Mesa> = transaction {
    MesasTable
      .selectAll()
      .map {
        Mesa(
          id = it[MesasTable.id],
          name = it[MesasTable.name],
          capacidad = it[MesasTable.capacidad],
          disponible = it[MesasTable.disponible]
        )
      }
  }

  fun getById(id: Int): Mesa? = transaction {
    MesasTable
      .selectAll()
      .where { MesasTable.id eq id }
      .singleOrNull()
      ?.let {
        Mesa(
          id = it[MesasTable.id],
          name = it[MesasTable.name],
          capacidad = it[MesasTable.capacidad],
          disponible = it[MesasTable.disponible]
        )
      }
  }

  fun create(mesa: Mesa): Mesa = transaction {
    val inserted = MesasTable.insert {
      it[name] = mesa.name
      it[capacidad] = mesa.capacidad
      it[disponible] = mesa.disponible
    } get MesasTable.id

    mesa.copy(id = inserted)
  }

  fun update(id: Int, mesa: Mesa): Boolean = transaction {
    MesasTable.update({ MesasTable.id eq id }) {
      it[name] = mesa.name
      it[capacidad] = mesa.capacidad
      it[disponible] = mesa.disponible
    } > 0
  }

  fun delete(id: Int): Boolean = transaction {
    MesasTable.deleteWhere { MesasTable.id eq id } > 0
  }
}
