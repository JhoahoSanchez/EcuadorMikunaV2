using UsersService.Models;
using UsersService.Repository;
using Microsoft.AspNetCore.Mvc;

namespace UsersService.Controllers
{
    [ApiController]
    [Route("api/worker")]
    public class WorkerController : ControllerBase
    {
        private readonly IWorkerRepository _repository;

        public WorkerController(IWorkerRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var workers = await _repository.GetWorkers();
            return Ok(workers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkerById([FromRoute] int id)
        {
            var worker = await _repository.GetWorkerById(id);
            if (worker == null)
            {
                return NotFound();
            }
            return Ok(worker);
        }


        [HttpGet("getByEmail/{email}")]
        public async Task<IActionResult> GetByEmail([FromRoute] string email)
        {
            var worker = await _repository.GetWorkerByEmail(email);
            if (worker == null)
            {
                return NotFound();
            }
            return Ok(worker);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewWorker([FromBody] Worker worker)
        {
            await _repository.AddWorker(worker);
            return CreatedAtAction(nameof(Get), new { id = worker.Id }, worker);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWorker([FromRoute] int id, [FromBody] Worker worker)
        {
            if (id != worker.Id)
            {
                return BadRequest();
            }

            var existingWorker = await _repository.GetWorkerById(id);
            if (existingWorker == null)
            {
                return NotFound();
            }

            await _repository.UpdateWorker(worker);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingAdministrator = _repository.GetWorkerById(id);
            if (existingAdministrator == null)
            {
                return NotFound();
            }

            await _repository.DeleteWorker(id);
            return Ok();
        }
    }
}
