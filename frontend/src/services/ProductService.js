import RequestHandler from '../utils/RequestHandler';

export default class ProductService{

    
    addProduct(param){
    	
    	const url = `/api/product/add`;
        return RequestHandler.post(url,param);
    }
    
    updateProduct(param){
    	
    	const url = `/api/product/update`;
        return RequestHandler.post(url,param);
    }
    
    
    deleteProduct(param){
    	
    	const url = `/api/product/delete`;
        return RequestHandler.post(url,param);
    }
    
    
    getProducts(param){
    	
    	const url = `/api/product/get`;
        return RequestHandler.post(url,param);
    }
    
}