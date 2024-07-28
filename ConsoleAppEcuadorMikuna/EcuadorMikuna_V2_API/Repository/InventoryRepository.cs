using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace EcuadorMikuna_V2_API.Repository
{
    public class InventoryRepository : IInventoryRepository
    {
        private readonly ApplicationContext _context;

        public InventoryRepository(ApplicationContext context)
        {
            this._context = context;
        }
        public async Task<int> AddInventory(Inventory inventory)
        {
            _context.Inventory.Add(inventory);
            await _context.SaveChangesAsync();
            return inventory.ID;
        }

        public async Task DeleteInventory(int id)
        {
            var inventory = _context.Inventory.Find(id);
            if (inventory != null)
            {
                _context.Inventory.Remove(inventory);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Inventory>> GetInventory()
        {
            var records = await _context.Inventory.Select(x => new Inventory()
            {
                ID = x.ID,
                Products = x.Products
            }).ToListAsync();

            return records;
        }

        public async Task<Inventory> GetInventoryById(int id)
        {
            var records = await _context.Inventory.Where(x => x.ID == id).Select(x => new Inventory()
            {
                ID = x.ID,
                Products = x.Products
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task UpdateInventory(Inventory inventory)
        {
            _context.Inventory.Update(inventory);
            await _context.SaveChangesAsync();
        }
    }
}
