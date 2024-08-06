using OrdersService.Models;
using OrdersService.Repositories;
using Microsoft.EntityFrameworkCore;

namespace OrdersService.Repository
{
    public class OrderDetailRepository : IOrderDetailRepository
    {
        private readonly ApplicationContext _context;

        public OrderDetailRepository(ApplicationContext context)
        {
            this._context = context;
        }
        public async Task<int> AddOrderDetail(OrderDetail order)
        {
            _context.OrderDetails.Add(order);
            await _context.SaveChangesAsync();
            return order.OrderDetailId;
        }

        public async Task DeleteOrderDetail(int id)
        {
            var orderDetail = _context.OrderDetails.Find(id);
            if (orderDetail != null)
            {
                _context.OrderDetails.Remove(orderDetail);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<OrderDetail>> GetOrderDetail()
        {
            var records = await _context.OrderDetails.Select(x => new OrderDetail()
            {
                OrderDetailId = x.OrderDetailId,
                OrderId = x.OrderId,
                Order = x.Order,
                ProductId = x.ProductId,
                Product = x.Product,
                Quantity = x.Quantity
            }).ToListAsync();

            return records;
        }

        public async Task<List<OrderDetail>> GetOrderDetailsById(int id)
        {
            var records = await _context.OrderDetails.Where(x => x.OrderDetailId == id).Select(x => new OrderDetail()
            {
                OrderDetailId = x.OrderDetailId,
                OrderId = x.OrderId,
                Order = x.Order,
                ProductId = x.ProductId,
                Product = x.Product,
                Quantity = x.Quantity
            }).ToListAsync();

            return records;
        }

        public async Task<List<OrderDetail>> GetOrderDetailsByOrderId(int id)
        {
            var records = await _context.OrderDetails.Where(x => x.OrderId == id).Select(x => new OrderDetail()
            {
                OrderDetailId = x.OrderDetailId,
                OrderId = x.OrderId,
                Order = x.Order,
                ProductId = x.ProductId,
                Product = x.Product,
                Quantity = x.Quantity
            }).ToListAsync();

            return records;
        }

        public async Task UpdateOrderDetail(OrderDetail order)
        {
            _context.OrderDetails.Update(order);
            await _context.SaveChangesAsync();
        }
    }
}
