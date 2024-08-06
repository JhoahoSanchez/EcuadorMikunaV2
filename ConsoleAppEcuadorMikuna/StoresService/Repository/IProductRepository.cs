using StoresService.Models;

namespace StoresService.Repository
{
    public interface IProductRepository
    {
        Task<List<Product>> GetProduct();
        Task<Product> GetProductById(int id);
        Task<List<Product>> GetProductsByName(string email);
        Task<int> AddProduct(Product product);
        Task UpdateProduct(Product product);
        Task DeleteProduct(int id);
    }
}
