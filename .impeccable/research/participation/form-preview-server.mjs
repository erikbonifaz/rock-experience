import http from "node:http";

// Solo para QA local: las solicitudes del formulario nunca llegan al backend.
http.createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/contact") {
    let body = "";
    for await (const chunk of request) body += chunk;
    const payload = JSON.parse(body);
    console.log(`Solicitud de prueba interceptada: ${payload.name}`);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    response.setHeader("Content-Type", "application/json");

    if (payload.name === "Error de prueba") {
      response.writeHead(503).end(JSON.stringify({ error: "Simulación local" }));
    } else if (payload.name === "Respuesta inválida") {
      response.writeHead(200).end(JSON.stringify({ success: true, id: "incorrecto" }));
    } else {
      response.writeHead(200).end(JSON.stringify({
        success: true,
        id: 42,
        registrationCode: "DEMO-CRED-001",
      }));
    }
    return;
  }

  const upstream = http.request({
    hostname: "localhost",
    port: 3102,
    path: request.url,
    method: request.method,
    headers: { ...request.headers, host: "localhost:3102" },
  }, (upstreamResponse) => {
    response.writeHead(upstreamResponse.statusCode, upstreamResponse.headers);
    upstreamResponse.pipe(response);
  });
  upstream.on("error", () => response.writeHead(502).end("Vista local no disponible"));
  request.pipe(upstream);
}).listen(3101, "127.0.0.1", () => {
  console.log("QA aislado: http://127.0.0.1:3101/#contacto; backend de producción local en :3102");
});
