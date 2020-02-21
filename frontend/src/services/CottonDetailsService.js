import RequestHandler from '../utils/RequestHandler';

export default class CottonDetailsService{

    
    addCottonDetails(param){
    	
    	const url = `/api/cottondetails/add`;
        return RequestHandler.post(url,param);
    }
    
    updateCottonDetails(param){
    	
    	const url = `/api/cottondetails/update`;
        return RequestHandler.post(url,param);
    }
    
    
    deleteCottonDetails(param){
    	
    	const url = `/api/cottondetails/delete`;
        return RequestHandler.post(url,param);
    }
    
    
    getCottonDetails(param){
    	
    	const url = `/api/cottondetails/get`;
        return RequestHandler.post(url,param);
    }
    
}