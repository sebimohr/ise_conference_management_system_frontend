import {IApiEndpoints} from "@/app/api/IApiEndpoints";
import {MOCK_BACKEND} from "@/app/api/Constants";
import ApiServiceMock from "@/app/api/ApiServiceMock";
import ApiService from "@/app/api/ApiService";

export class ApiServiceInstance {
  private static instance: IApiEndpoints;

  public static getInstance(): IApiEndpoints {
    if (!ApiServiceInstance.instance) {
      if (MOCK_BACKEND) {
        ApiServiceInstance.instance = new ApiServiceMock();
      } else {
        ApiServiceInstance.instance = new ApiService();
      }
    }

    return ApiServiceInstance.instance;
  }
}

export default ApiServiceInstance.getInstance();
