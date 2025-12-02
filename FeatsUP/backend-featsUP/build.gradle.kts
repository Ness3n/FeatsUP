val kotlin_version: String by project
val logback_version: String by project

plugins {
  kotlin("jvm") version "2.2.20"
  id("io.ktor.plugin") version "3.3.2"
  id("org.jetbrains.kotlin.plugin.serialization") version "2.2.20"
}

group = "com.example"
version = "0.0.1"

application {
  mainClass = "io.ktor.server.netty.EngineMain"
}

kotlin {
  compilerOptions {
    allWarningsAsErrors.set(false)
  }
}

dependencies {

  implementation("io.ktor:ktor-server-cors")
  implementation("io.ktor:ktor-server-core")
  implementation("io.ktor:ktor-server-content-negotiation")
  implementation("io.ktor:ktor-serialization-kotlinx-json")
  implementation("io.ktor:ktor-server-call-logging")
  implementation("io.ktor:ktor-server-netty")
  implementation("ch.qos.logback:logback-classic:$logback_version")
  implementation("io.ktor:ktor-server-config-yaml")
  testImplementation("io.ktor:ktor-server-test-host")
  testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")

  //my dependences
  implementation("org.jetbrains.exposed:exposed-core:0.54.0")
  implementation("org.jetbrains.exposed:exposed-dao:0.54.0")
  implementation("org.jetbrains.exposed:exposed-jdbc:0.54.0")
  implementation("org.jetbrains.exposed:exposed-java-time:0.54.0")
  implementation("org.jetbrains.exposed:exposed-kotlin-datetime:0.54.0")

  // PostgreSQL Driver
  implementation("org.postgresql:postgresql:42.7.3")

    // Ktor
  implementation("io.ktor:ktor-server-core-jvm")
  implementation("io.ktor:ktor-server-netty-jvm")
  implementation("io.ktor:ktor-server-content-negotiation-jvm")
  implementation("io.ktor:ktor-serialization-kotlinx-json-jvm")
}
