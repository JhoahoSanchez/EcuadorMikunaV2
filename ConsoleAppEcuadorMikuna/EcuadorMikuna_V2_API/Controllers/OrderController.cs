using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EcuadorMikuna_V2_API.Controllers
{
    [ApiController]
    [Route("api/order")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _repository;

        public OrderController(IOrderRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var orders = await _repository.GetOrder();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderById([FromRoute] int id)
        {
            var order = await _repository.GetOrderById(id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpGet("getByClient/{id}")]
        public async Task<IActionResult> GetOrderByClient([FromRoute] int id)
        {
            var order = await _repository.GetOrdersByClientId(id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewOrder([FromBody] Order order)
        {
            await _repository.AddOrder(order);
            return CreatedAtAction(nameof(Get), new { id = order.Id }, order);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder([FromRoute] int id, [FromBody] Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            var existingOrder = await _repository.GetOrderById(id);
            if (existingOrder == null)
            {
                return NotFound();
            }

            await _repository.UpdateOrder(order);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingOrder = _repository.GetOrderById(id);
            if (existingOrder == null)
            {
                return NotFound();
            }

            await _repository.DeleteOrder(id);
            return Ok();
        }
    }
}
