using StoresService.Models;
using StoresService.Repository;
using Microsoft.AspNetCore.Mvc;

namespace StoresService.Controllers
{
    [ApiController]
    [Route("api/store")]
    public class StoreController: ControllerBase
    {
        private readonly IStoreRepository _repository;

        public StoreController(IStoreRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var stores = await _repository.GetStores();
            return Ok(stores);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStoreById([FromRoute] int id)
        {
            var store = await _repository.GetStoreById(id);
            if (store == null)
            {
                return NotFound();
            }
            return Ok(store);
        }

        [HttpGet("getByZip/{id}")]
        public async Task<IActionResult> GetStoreByZip([FromRoute] string zipCode)
        {
            var store = await _repository.GetStoreByZipCode(zipCode);
            if (store == null)
            {
                return NotFound();
            }
            return Ok(store);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewStore([FromBody] Store store)
        {
            await _repository.AddStore(store);
            return CreatedAtAction(nameof(Get), new { id = store.Id }, store);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStore([FromRoute] int id, [FromBody] Store store)
        {
            if (id != store.Id)
            {
                return BadRequest();
            }

            var existingStore = await _repository.GetStoreById(id);
            if (existingStore == null)
            {
                return NotFound();
            }

            await _repository.UpdateStore(store);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingProduct = _repository.GetStoreById(id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            await _repository.DeleteStore(id);
            return Ok();
        }

    }
}
