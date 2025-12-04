val kotlin_version: String by project
val logback_version: String by project

plugins {
  kotlin("jvm") version "2.2.20"
  id("io.ktor.plugin") version "3.3.0"
  id("org.jetbrains.kotlin.plugin.serialization") version "2.2.20"
}

application {
  mainClass.set("io.ktor.server.netty.EngineMain")
}

repositories {
  mavenCentral()
}

dependencies {
  // Ktor core
  implementation("io.ktor:ktor-server-core-jvm")
  implementation("io.ktor:ktor-server-netty-jvm")
  implementation("io.ktor:ktor-server-content-negotiation-jvm")
  implementation("io.ktor:ktor-serialization-kotlinx-json-jvm")
  implementation("io.ktor:ktor-server-cors")
  implementation("io.ktor:ktor-server-call-logging")

  implementation("ch.qos.logback:logback-classic:$logback_version")

  // Database
  implementation("org.postgresql:postgresql:42.7.3")
  // Exposed 0.54.0 (la actual)
  implementation("org.jetbrains.exposed:exposed-core:0.54.0")
  implementation("org.jetbrains.exposed:exposed-dao:0.54.0")
  implementation("org.jetbrains.exposed:exposed-jdbc:0.54.0")
  implementation("org.jetbrains.exposed:exposed-kotlin-datetime:0.54.0")


  // Serialization
  implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")
}
