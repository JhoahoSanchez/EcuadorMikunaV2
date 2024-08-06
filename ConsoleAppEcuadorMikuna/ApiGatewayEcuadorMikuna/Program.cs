using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

// A�adir servicios de configuraci�n
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);

// A�adir Ocelot al contenedor de servicios
builder.Services.AddOcelot(builder.Configuration);

var app = builder.Build();

// Usar CORS
app.UseCors("CorsPolicy");

// Usar Ocelot middleware
app.UseOcelot().Wait();

app.Run();
