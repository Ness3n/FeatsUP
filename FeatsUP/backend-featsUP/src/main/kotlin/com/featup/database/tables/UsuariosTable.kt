package com.featup.database

import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.javatime.date

object UsuariosTable : Table("usuarios") {
  val id = integer("id").autoIncrement()
  val nombre = varchar("nombre", 100)
  val apellidos = varchar("apellidos", 100).nullable()
  val correo = varchar("correo", 150).uniqueIndex()
  val contrasena = varchar("contrasena", 255)
  val fechaNacimiento = date("fecha_nacimiento").nullable()
  val celular = varchar("celular", 10).nullable()
  val rol = varchar("rol", 20).default("usuario")

  override val primaryKey = PrimaryKey(id)
}
