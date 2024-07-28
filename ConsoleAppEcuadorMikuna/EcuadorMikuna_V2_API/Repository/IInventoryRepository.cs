using EcuadorMikuna_V2_API.Models;

namespace EcuadorMikuna_V2_API.Repository
{
    public interface IInventoryRepository
    {
        Task<List<Inventory>> GetInventory();
        Task<Inventory> GetInventoryById(int id);
        Task<int> AddInventory(Inventory inventory);
        Task UpdateInventory(Inventory inventory);
        Task DeleteInventory(int id);
    }
}
