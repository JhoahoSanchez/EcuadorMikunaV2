using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EcuadorMikuna_V2_API.Controllers
{
    [ApiController]
    [Route("api/client")]
    public class ClientController: ControllerBase
    {
        private readonly IClientRepository _repository;

        public ClientController(IClientRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var clients = await _repository.GetClients();
            return Ok(clients);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetClientById([FromRoute] int id)
        {
            var client = await _repository.GetClientById(id);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(client);
        }

        [HttpGet("getByEmail/{email}")]
        public async Task<IActionResult> GetByEmail([FromRoute] string email)
        {
            var client = await _repository.GetClientByEmail(email);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(client);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewClient([FromBody] Client client)
        {
            await _repository.AddClient(client);
            return CreatedAtAction(nameof(Get), new { id = client.Id }, client);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClient([FromRoute] int id, [FromBody] Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            var existingClient = await _repository.GetClientById(id);
            if (existingClient == null)
            {
                return NotFound();
            }

            await _repository.UpdateClient(client);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingClient = _repository.GetClientById(id);
            if (existingClient == null)
            {
                return NotFound();
            }

            await _repository.DeleteClient(id);
            return Ok();
        }
    }
}
