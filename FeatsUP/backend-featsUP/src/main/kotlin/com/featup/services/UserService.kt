package com.featup.services

import com.featup.models.Usuario
import com.featup.database.UsuariosTable
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import java.time.LocalDate

class UserService {

  fun getAll(): List<Usuario> = transaction {
    UsuariosTable.selectAll().map { rowToUser(it) }
  }

  fun getById(id: Int): Usuario? = transaction {
    UsuariosTable.selectAll()
      .where(UsuariosTable.id eq id)
      .map { rowToUser(it) }
      .singleOrNull()
  }

  fun getByCorreo(correo: String): Usuario? = transaction {
    UsuariosTable.selectAll()
      .where(UsuariosTable.correo eq correo)
      .map { rowToUser(it) }
      .singleOrNull()
  }

  fun create(u: Usuario): Usuario = transaction {
    val newId = UsuariosTable.insert { row ->
      row[UsuariosTable.nombre] = u.nombre
      row[UsuariosTable.apellidos] = u.apellidos
      row[UsuariosTable.correo] = u.correo
      row[UsuariosTable.contrasena] = u.contrasena  // <--- TEXTO NORMAL
      row[UsuariosTable.fechaNacimiento] = u.fechaNacimiento?.let { LocalDate.parse(it) }
      row[UsuariosTable.celular] = u.celular
      row[UsuariosTable.rol] = u.rol
    } get UsuariosTable.id

    getById(newId)!!
  }

  fun delete(id: Int): Boolean = transaction {
    UsuariosTable.deleteWhere { UsuariosTable.id eq id } > 0
  }

  private fun rowToUser(row: ResultRow) = Usuario(
    id = row[UsuariosTable.id],
    nombre = row[UsuariosTable.nombre],
    apellidos = row[UsuariosTable.apellidos],
    correo = row[UsuariosTable.correo],
    contrasena = row[UsuariosTable.contrasena],
    fechaNacimiento = row[UsuariosTable.fechaNacimiento]?.toString(),
    celular = row[UsuariosTable.celular],
    rol = row[UsuariosTable.rol]
  )
}
