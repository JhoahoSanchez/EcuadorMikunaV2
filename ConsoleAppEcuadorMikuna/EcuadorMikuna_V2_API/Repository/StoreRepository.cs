using EcuadorMikuna_V2_API.Models;
using EcuadorMikuna_V2_API.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace EcuadorMikuna_V2_API.Repository
{
    public class StoreRepository : IStoreRepository
    {
        private readonly ApplicationContext _context;

        public StoreRepository(ApplicationContext context)
        {
            this._context = context;
        }
        public async Task<int> AddStore(Store store)
        {
            _context.Stores.Add(store);
            await _context.SaveChangesAsync();
            return store.Id;
        }

        public async Task DeleteStore(int id)
        {
            var store = _context.Stores.Find(id);
            if (store != null)
            {
                _context.Stores.Remove(store);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Store> GetStoreById(int id)
        {
            var records = await _context.Stores.Where(x => x.Id == id).Select(x => new Store()
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address,
                City = x.City,
                State = x.State,
                PostalCode = x.PostalCode,
                Country = x.Country,
                Phone = x.Phone,
                Inventory = x.Inventory,
                WorkerList = x.WorkerList
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<Store> GetStoreByZipCode(string zipCode)
        {
            var records = await _context.Stores.Where(x => x.PostalCode == zipCode).Select(x => new Store()
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address,
                City = x.City,
                State = x.State,
                PostalCode = x.PostalCode,
                Country = x.Country,
                Phone = x.Phone,
                Inventory = x.Inventory,
                WorkerList = x.WorkerList
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task<List<Store>> GetStores()
        {
            var records = await _context.Stores.Select(x => new Store()
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address,
                City = x.City,
                State = x.State,
                PostalCode = x.PostalCode,
                Country = x.Country,
                Phone = x.Phone,
                Inventory = x.Inventory,
                WorkerList = x.WorkerList
            }).ToListAsync();

            return records;
        }

        public async Task UpdateStore(Store store)
        {
            _context.Stores.Update(store);
            await _context.SaveChangesAsync();
        }
    }
}
