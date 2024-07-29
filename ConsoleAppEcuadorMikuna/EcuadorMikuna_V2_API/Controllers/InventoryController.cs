using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EcuadorMikuna_V2_API.Controllers
{
    [ApiController]
    [Route("api/inventory")]
    public class InventoryController: ControllerBase
    {
        private readonly IInventoryRepository _repository;

        public InventoryController(IInventoryRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var inventory = await _repository.GetInventory();
            return Ok(inventory);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInventoryById([FromRoute] int id)
        {
            var inventory = await _repository.GetInventoryById(id);
            if (inventory == null)
            {
                return NotFound();
            }
            return Ok(inventory);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewInventory([FromBody] Inventory inventory)
        {
            await _repository.AddInventory(inventory);
            return CreatedAtAction(nameof(Get), new { id = inventory.ID }, inventory);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInventory([FromRoute] int id, [FromBody] Inventory inventory)
        {
            if (id != inventory.ID)
            {
                return BadRequest();
            }

            var existingInventory = await _repository.GetInventoryById(id);
            if (existingInventory == null)
            {
                return NotFound();
            }

            await _repository.UpdateInventory(inventory);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingInventory = _repository.GetInventoryById(id);
            if (existingInventory == null)
            {
                return NotFound();
            }

            await _repository.DeleteInventory(id);
            return Ok();
        }

    }
}
