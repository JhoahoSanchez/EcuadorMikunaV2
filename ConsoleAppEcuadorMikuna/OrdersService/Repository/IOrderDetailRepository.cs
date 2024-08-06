using OrdersService.Models;

namespace OrdersService.Repository
{
    public interface IOrderDetailRepository
    {
        Task<List<OrderDetail>> GetOrderDetail();
        Task<List<OrderDetail>> GetOrderDetailsById(int id);
        Task<List<OrderDetail>> GetOrderDetailsByOrderId(int id);
        Task<int> AddOrderDetail(OrderDetail order);
        Task UpdateOrderDetail(OrderDetail order);
        Task DeleteOrderDetail(int id);
    }
}
