using MongoDB.Driver;
using Microsoft.AspNetCore.Mvc;

[Route("api/vuelos")]
public class VuelosController : ControllerBase {

    [HttpGet("ciudades_origen")]
    public IActionResult CiudadesOrigen(){
         var client = new MongoClient(CadenasConexion.MONGO_DB);
         var db = client.GetDatabase("Aeropuerto");
         var colletion = db.GetCollection<Vuelo>("Vuelos");
         
        var lista = colletion.Distinct<string>("ciudad_origen", FilterDefinition<Vuelo>.Empty).ToList();

        return Ok(lista);
    }

     [HttpGet("ciudades_destino")]
    public IActionResult CiudadesDestino(){
        return Ok();
    }

     [HttpGet("estatus")]
    public IActionResult ListarEstatus(){
        return Ok();
    }

     [HttpGet("lisatar_vuelos")]
    public IActionResult ListarVuelos(){
        return Ok();
    }

}