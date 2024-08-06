using StoresService.Models;

namespace StoresService.Repository
{
    public interface IStoreRepository
    {
        Task<List<Store>> GetStores();
        Task<Store> GetStoreById(int id);
        Task<Store> GetStoreByZipCode(string zipCode);
        Task<int> AddStore(Store store);
        Task UpdateStore(Store store);
        Task DeleteStore(int id);
    }
}
