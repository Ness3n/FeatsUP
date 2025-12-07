package com.featup.services

import com.featup.models.Reservacion
import com.featup.database.ReservacionesTable
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import java.time.LocalDate
import java.time.LocalTime
import java.time.LocalDateTime

class ReservacionService {
  fun getAll(): List<Reservacion> = transaction { ReservacionesTable.selectAll().map { rowToReservacion(it) } }

  fun getById(id: Int): Reservacion? = transaction { ReservacionesTable.selectAll()
    .where { ReservacionesTable.id eq id }
    .map { rowToReservacion(it) }.singleOrNull() }

  fun getByUsuario(usuarioId: Int): List<Reservacion> = transaction { ReservacionesTable.selectAll()
    .where { ReservacionesTable.usuarioId eq usuarioId }
    .map { rowToReservacion(it) } }

  fun create(r: Reservacion): Reservacion = transaction {
    val date = LocalDate.parse(r.fechaReservacion)
    val time = LocalTime.parse(r.horaReservacion)
    val newId = ReservacionesTable.insert { row ->
      row[ReservacionesTable.usuarioId] = r.usuarioId
      row[ReservacionesTable.mesaId] = r.mesaId
      row[ReservacionesTable.fechaReservacion] = date
      row[ReservacionesTable.horaReservacion] = time
      row[ReservacionesTable.estado] = r.estado
      row[ReservacionesTable.creadoEn] = LocalDateTime.now()
    } get ReservacionesTable.id

    getById(newId)!!
  }

  fun delete(id: Int): Boolean = transaction { ReservacionesTable.deleteWhere { ReservacionesTable.id eq id } > 0 }

  private fun rowToReservacion(row: ResultRow) = Reservacion(
    id = row[ReservacionesTable.id],
    usuarioId = row[ReservacionesTable.usuarioId],
    mesaId = row[ReservacionesTable.mesaId],
    fechaReservacion = row[ReservacionesTable.fechaReservacion].toString(),
    horaReservacion = row[ReservacionesTable.horaReservacion].toString(),
    estado = row[ReservacionesTable.estado]
  )
}
