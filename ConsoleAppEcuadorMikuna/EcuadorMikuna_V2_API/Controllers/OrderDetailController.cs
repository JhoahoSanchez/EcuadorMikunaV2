using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EcuadorMikuna_V2_API.Controllers
{
    [ApiController]
    [Route("api/orderDetail")]
    public class OrderDetailController: ControllerBase
    {
        private readonly IOrderDetailRepository _repository;

        public OrderDetailController(IOrderDetailRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var orders = await _repository.GetOrderDetail();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderDetailById([FromRoute] int id)
        {
            var order = await _repository.GetOrderDetailsById(id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpGet("getByOrder/{id}")]
        public async Task<IActionResult> GetOrderDetailByOrder([FromRoute] int id)
        {
            var order = await _repository.GetOrderDetailsByOrderId(id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewOrder([FromBody] OrderDetail order)
        {
            await _repository.AddOrderDetail(order);
            return CreatedAtAction(nameof(Get), new { id = order.OrderDetailId }, order);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder([FromRoute] int id, [FromBody] OrderDetail order)
        {
            if (id != order.OrderDetailId)
            {
                return BadRequest();
            }

            var existingOrder = await _repository.GetOrderDetailsById(id);
            if (existingOrder == null)
            {
                return NotFound();
            }

            await _repository.UpdateOrderDetail(order);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingOrder = _repository.GetOrderDetailsByOrderId(id);
            if (existingOrder == null)
            {
                return NotFound();
            }

            await _repository.DeleteOrderDetail(id);
            return Ok();
        }

    }
}
