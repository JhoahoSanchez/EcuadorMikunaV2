using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcuadorMikuna_V2_API.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdministratorController : ControllerBase
    {
        private readonly IAdminRepository _repository;

        public AdministratorController(IAdminRepository repository)
        {
            _repository = repository;
        }
        // Método GET: api/Administrator
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var administrators = await _repository.GetAdministrators();
            return Ok(administrators);
        }

        // GET api/<AdministratorController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdminById([FromRoute] int id)
        {
            var admin = await _repository.GetAdministratorById(id);
            if (admin == null)
            {
                return NotFound();
            }
            return Ok(admin);
        }

        //cambiar de aqui para abajo

        // GET api/<AdministratorController>/getByEmail/
        [HttpGet("getByEmail/{email}")]
        public async Task<IActionResult> GetByEmail([FromRoute] string email)
        {
            var administrator = await _repository.GetAdministratorByEmail(email);
            if (administrator == null)
            {
                return NotFound();
            }
            return Ok(administrator);
        }

        // POST api/<AdministratorController>
        [HttpPost("")]
        public async Task<IActionResult> AddNewAdmin([FromBody] Administrator administrator)
        {
            await _repository.AddAdministrator(administrator);
            return CreatedAtAction(nameof(Get), new { id = administrator.Id }, administrator);
        }

        // PUT api/<AdministratorController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmin([FromRoute] int id, [FromBody] Administrator administrator)
        {
            if (id != administrator.Id)
            {
                return BadRequest();
            }

            var existingAdministrator = await _repository.GetAdministratorById(id);
            if (existingAdministrator == null)
            {
                return NotFound();
            }

            await _repository.UpdateAdministrator(administrator);
            return NoContent();
        }

        // DELETE api/<AdministratorController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingAdministrator = _repository.GetAdministratorById(id);
            if (existingAdministrator == null)
            {
                return NotFound();
            }

            await _repository.DeleteAdministrator(id);
            return Ok();
        }
    }
}
