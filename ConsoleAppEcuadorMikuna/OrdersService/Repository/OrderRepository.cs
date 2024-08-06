using OrdersService.Models;
using OrdersService.Repositories;
using Microsoft.EntityFrameworkCore;

namespace OrdersService.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationContext _context;

        public OrderRepository(ApplicationContext context)
        {
            this._context = context;
        }
        public async Task<int> AddOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return order.Id;
        }

        public async Task DeleteOrder(int id)
        {
            var order = _context.Orders.Find(id);
            if (order != null)
            {
                _context.Orders.Remove(order);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Order>> GetOrder()
        {
            var records = await _context.Orders.Select(x => new Order()
            {
                Id = x.Id,
                ClientID = x.ClientID,
                StoreID = x.StoreID,
                OrderDate = x.OrderDate,
                Type = x.Type,
                Price = x.Price,
                OrderDetails = x.OrderDetails
            }).ToListAsync();

            return records;
        }

        public async Task<List<Order>> GetOrdersByClientId(int id)
        {
            var records = await _context.Orders.Where(x => x.ClientID == id).Select(x => new Order()
            {
                Id = x.Id,
                ClientID = x.ClientID,
                StoreID = x.StoreID,
                OrderDate = x.OrderDate,
                Type = x.Type,
                Price = x.Price,
                OrderDetails = x.OrderDetails
            }).ToListAsync();

            return records;
        }

        public async Task<Order> GetOrderById(int id)
        {
            var records = await _context.Orders.Where(x => x.Id == id).Select(x => new Order()
            {
                Id = x.Id,
                ClientID = x.ClientID,
                StoreID = x.StoreID,
                OrderDate = x.OrderDate,
                Type = x.Type,
                Price = x.Price,
                OrderDetails = x.OrderDetails
            }).FirstOrDefaultAsync();

            return records;
        }

        public async Task UpdateOrder(Order order)
        {
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();
        }
    }
}
