package com.featup.services

import com.featup.models.Comprobante
import com.featup.database.ComprobantesTable
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import java.time.LocalDate
import java.time.LocalTime
import java.time.LocalDateTime

class ComprobanteService {
  fun getAll(): List<Comprobante> = transaction { ComprobantesTable.selectAll().map { rowToComprobante(it) } }

  fun getById(id: Int): Comprobante? = transaction { ComprobantesTable.selectAll().where { ComprobantesTable.id eq id }.map { rowToComprobante(it) }.singleOrNull() }

  fun create(c: Comprobante): Comprobante = transaction {
    val newId = ComprobantesTable.insert { row ->
      row[ComprobantesTable.reservacionId] = c.reservacionId
      row[ComprobantesTable.usuarioId] = c.usuarioId
      row[ComprobantesTable.mesaId] = c.mesaId
      row[ComprobantesTable.fechaReservacion] = LocalDate.parse(c.fechaReservacion)
      row[ComprobantesTable.horaReservacion] = LocalTime.parse(c.horaReservacion)
      row[ComprobantesTable.estadoReservacion] = c.estadoReservacion
      row[ComprobantesTable.creadoEn] = LocalDateTime.now()
    } get ComprobantesTable.id

    getById(newId)!!
  }

  private fun rowToComprobante(row: ResultRow) = Comprobante(
    id = row[ComprobantesTable.id],
    reservacionId = row[ComprobantesTable.reservacionId],
    usuarioId = row[ComprobantesTable.usuarioId],
    mesaId = row[ComprobantesTable.mesaId],
    fechaReservacion = row[ComprobantesTable.fechaReservacion].toString(),
    horaReservacion = row[ComprobantesTable.horaReservacion].toString(),
    estadoReservacion = row[ComprobantesTable.estadoReservacion]
  )
}
