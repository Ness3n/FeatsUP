plugins {
  kotlin("jvm") version "2.2.20"
  id("io.ktor.plugin") version "3.3.2"
  id("org.jetbrains.kotlin.plugin.serialization") version "2.2.20"
  application
  id("com.gradleup.shadow") version "9.1.0"
}

kotlin {
  jvmToolchain(21)
}

group = "com.featup"
version = "0.0.1"

application {
  mainClass.set("io.ktor.server.netty.EngineMain")
}

dependencies {
  implementation("io.ktor:ktor-server-core:3.3.2")
  implementation("io.ktor:ktor-server-netty:3.3.2")
  implementation("io.ktor:ktor-server-cors:3.3.2")
  implementation("io.ktor:ktor-server-call-logging:3.3.2")
  implementation("io.ktor:ktor-server-content-negotiation:3.3.2")
  implementation("io.ktor:ktor-server-config-yaml:3.3.2")

  implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.7.2")
  implementation("io.ktor:ktor-serialization-kotlinx-json:3.3.2")

  implementation("org.jetbrains.exposed:exposed-core:0.54.0")
  implementation("org.jetbrains.exposed:exposed-dao:0.54.0")
  implementation("org.jetbrains.exposed:exposed-jdbc:0.54.0")
  implementation("org.jetbrains.exposed:exposed-java-time:0.54.0")
  implementation("org.jetbrains.exposed:exposed-kotlin-datetime:0.54.0")

  implementation("org.postgresql:postgresql:42.7.3")

  implementation("ch.qos.logback:logback-classic:1.2.11")

  implementation("io.ktor:ktor-server-auth:3.3.2")
  implementation("io.ktor:ktor-server-auth-jwt:3.3.2")
  implementation("com.auth0:java-jwt:4.4.0")
}

tasks {
  shadowJar {
    archiveBaseName.set("backend-featsUP")
    archiveClassifier.set("all")
    archiveVersion.set("")
  }
}
