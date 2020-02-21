import RequestHandler from '../utils/RequestHandler';

export default class QualityTypeService {
  addQualityType(param) {
    const url = `/api/qualitytype/add`;
    return RequestHandler.post(url, param);
  }

  updateQualityType(param) {
    const url = `/api/qualitytype/update`;
    return RequestHandler.post(url, param);
  }

  deleteQualityType(param) {
    const url = `/api/qualitytype/delete`;
    return RequestHandler.post(url, param);
  }

  getQualityTypes(param) {
    const url = `/api/qualitytype/get`;
    return RequestHandler.post(url, param);
  }
}
