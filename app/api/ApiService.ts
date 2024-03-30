import axios from "axios";
import {
  BACKEND_API_BASE_URL,
  ENDPOINT1,
  ENDPOINT2,
  ENDPOINT3,
  ENDPOINT4,
  ENDPOINT5,
  ENDPOINT6
} from "@/app/api/Constants";

class ApiService {
  private static instance: ApiService;
  private static baseUrl: string;

  private constructor() {
    ApiService.baseUrl = "localhost:3001";
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  private getApiUrl(endpoint: endpointEnum): string {
    const baseUrl = BACKEND_API_BASE_URL

    let endpointString = "";

    switch (endpoint) {
      case endpointEnum.endpoint1:
        endpointString = ENDPOINT1!;
        break;
      case endpointEnum.endpoint2:
        endpointString = ENDPOINT2!;
        break;
      case endpointEnum.endpoint3:
        endpointString = ENDPOINT3!;
        break;
      case endpointEnum.endpoint4:
        endpointString = ENDPOINT4!;
        break;
      case endpointEnum.endpoint5:
        endpointString = ENDPOINT5!;
        break;
      case endpointEnum.endpoint6:
        endpointString = ENDPOINT6!;
        break;
    }
    return `${baseUrl}/${endpointString}`
  }

  private async get(endpoint: endpointEnum): Promise<any> {
    try {
      const url = this.getApiUrl(endpoint);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  }

  private async post(endpoint: endpointEnum, data: any): Promise<any> {
    try {
      const url = this.getApiUrl(endpoint);
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  }
}

export default ApiService.getInstance();
