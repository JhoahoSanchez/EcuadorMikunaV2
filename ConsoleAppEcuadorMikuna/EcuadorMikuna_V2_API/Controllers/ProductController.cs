using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EcuadorMikuna_V2_API.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repository;

        public ProductController(IProductRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> Get()
        {
            var product = await _repository.GetProduct();
            return Ok(product);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById([FromRoute] int id)
        {
            var product = await _repository.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }


        [HttpGet("getByName/{name}")]
        public async Task<IActionResult> GetByName([FromRoute] string name)
        {
            var products = await _repository.GetProductsByName(name);
            if (products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddNewProduct([FromBody] Product product)
        {
            await _repository.AddProduct(product);
            return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] int id, [FromBody] Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            var existingProduct = await _repository.GetProductById(id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            await _repository.UpdateProduct(product);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingProduct = _repository.GetProductById(id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            await _repository.DeleteProduct(id);
            return Ok();
        }
    }
}
