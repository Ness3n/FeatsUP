package com.featup.services

import com.featup.models.Mesa
import com.featup.database.MesasTable
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq

class MesaService {
  fun getAll(): List<Mesa> = transaction { MesasTable.selectAll().map { rowToMesa(it) } }

  fun getById(id: Int): Mesa? = transaction { MesasTable.selectAll().where { MesasTable.id eq id }.map { rowToMesa(it) }.singleOrNull() }

  fun create(m: Mesa): Mesa = transaction {
    val newId = MesasTable.insert { row ->
      row[MesasTable.numeroMesa] = m.numeroMesa
      row[MesasTable.numeroSillas] = m.numeroSillas
      row[MesasTable.estado] = m.estado
      row[MesasTable.area] = m.area
    } get MesasTable.id
    getById(newId)!!
  }

  fun update(id: Int, m: Mesa): Mesa? = transaction {
    MesasTable.update({ MesasTable.id eq id }) {
      it[numeroMesa] = m.numeroMesa
      it[numeroSillas] = m.numeroSillas
      it[estado] = m.estado
      it[area] = m.area
    }
    getById(id)
  }

  fun delete(id: Int): Boolean = transaction { MesasTable.deleteWhere { MesasTable.id eq id } > 0 }

  private fun rowToMesa(row: ResultRow) = Mesa(
    id = row[MesasTable.id],
    numeroMesa = row[MesasTable.numeroMesa],
    numeroSillas = row[MesasTable.numeroSillas],
    estado = row[MesasTable.estado],
    area = row[MesasTable.area]
  )
}
