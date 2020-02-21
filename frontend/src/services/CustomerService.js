import RequestHandler from '../utils/RequestHandler';

export default class CustomerService {
  addCustomer(param) {
    const url = `/api/customer/add`;
    return RequestHandler.post(url, param);
  }

  updateCustomer(param) {
    const url = `/api/customer/update`;
    return RequestHandler.post(url, param);
  }

  deleteCustomer(param) {
    const url = `/api/customer/delete`;
    return RequestHandler.post(url, param);
  }

  getCustomers(param) {
    const url = `/api/customer/get`;
    return RequestHandler.post(url, param);
  }
}
