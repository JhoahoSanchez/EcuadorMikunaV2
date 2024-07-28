using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace EcuadorMikuna_V2_API.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationContext _context;

        public ProductRepository(ApplicationContext context)
        {
            this._context = context;
        }
        public async Task<int> AddProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return product.Id;
        }

        public async Task DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Product>> GetProduct()
        {
            var records = await _context.Products.Select(x => new Product()
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Price = x.Price,
                Quantity = x.Quantity
            }).ToListAsync();

            return records;
        }

        public async Task<List<Product>> GetProductsByName(string name)
        {
            var records = await _context.Products.Where(x => x.Name == name).Select(x => new Product()
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Price = x.Price,
                Quantity = x.Quantity
            }).ToListAsync();

            return records;
        }

        public async Task<Product> GetProductById(int id)
        {
            var records = await _context.Products.Where(x => x.Id == id).Select(x => new Product()
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Price = x.Price,
                Quantity = x.Quantity
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task UpdateProduct(Product product)
        {
            _context.Products.Update(product);
            await _context.SaveChangesAsync();
        }
    }
}
