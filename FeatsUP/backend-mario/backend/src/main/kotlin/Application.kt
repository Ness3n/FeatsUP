import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*   // ✅ Import correcto
import java.io.File

fun main() {
    embeddedServer(Netty, port = 8080) {
        module()
    }.start(wait = true)
}

fun Application.module() {
    install(ContentNegotiation) {
        json()
    }

    install(CORS) {
        anyHost()
    }

    routing {
        // Sirve archivos estáticos
        staticResources("/", "static") {
            defaultResource("index.html", "static")
        }

        // Redirección inteligente: solo si el archivo no existe
        get("{...}") {
            val path = call.request.path()   // ✅ ahora sí compila
            val file = File("src/main/resources/static$path")

            if (file.exists() && file.isFile) {
                call.respondFile(file)
            } else {
                call.respondFile(File("src/main/resources/static/index.html"))
            }
        }
    }
}