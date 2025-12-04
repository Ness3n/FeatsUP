package com.featup.services

import com.featup.models.Mesa
import org.jetbrains.exposed.sql.*
import com.featup.database.tables.MesasTable
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.dao.id.EntityID // Asegúrate de tener esta importación

class MesaService {

  fun getAll(): List<Mesa> = transaction {
    MesasTable.selectAll().map {
      Mesa(
        id = it[MesasTable.id].value,
        name = it[MesasTable.name],
        capacidad = it[MesasTable.capacidad]
      )
    }
  }

  fun getById(id: Int): Mesa? = transaction {
    // CORRECCIÓN FINAL: Especificar el tipo Int en EntityID
    MesasTable.select { MesasTable.id eq id }
      .map {
        Mesa(
          id = it[MesasTable.id].value,
          name = it[MesasTable.name],
          capacidad = it[MesasTable.capacidad]
        )
      }
      .singleOrNull()
  }

  fun create(mesa: Mesa): Mesa = transaction {
    val newId = MesasTable.insertAndGetId {
      it[MesasTable.name] = mesa.name
      it[MesasTable.capacidad] = mesa.capacidad
    }.value

    mesa.copy(id = newId)
  }

  fun delete(id: Int): Boolean = transaction {
    MesasTable.deleteWhere { MesasTable.id eq EntityID<Int>(id, MesasTable) } > 0
  }
}
