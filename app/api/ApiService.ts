import {BACKEND_API_BASE_URL} from "@/app/api/Constants";
import {revalidateTag} from "next/cache";

const getTag: string = "getData";
const baseUrl: string = BACKEND_API_BASE_URL;

class ApiService {
  private static instance: ApiService;

  /*
  private constructor() {
    // TODO: needed?
  }
  */

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  private getApiUrl(endpoint: endpointEnum): string {
    return `${baseUrl}${endpoint.valueOf()}`
  }

  private async get(endpoint: endpointEnum): Promise<any> {
    const url = this.getApiUrl(endpoint);

    let nextOptions = {};
    if (endpoint in [
      endpointEnum.ownOpenReviewsRoute,
      endpointEnum.ownDraftsReviewsRoute,
      endpointEnum.ownSubmittedReviewsRoute,
      endpointEnum.singleReviewRoute,
      endpointEnum.paperReviewsRoute
    ]) {
      nextOptions = {
        tags: [getTag]
      };
    }

    const fetchOptions = {
      method: 'GET',
      next: nextOptions
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok)
      this.reportErrorToUser(response);

    return response.json();
  }

  private async post(endpoint: endpointEnum, data: any): Promise<any> {
    const url = this.getApiUrl(endpoint);
    const fetchOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok)
      this.reportErrorToUser(response);

    revalidateTag(getTag); // TODO: only invalidate cache on new review post
    return response.json();
  }

  private reportErrorToUser(response: Response) {
    throw new Error('Backend operation failed: ' + response.statusText)
  }
}

export default ApiService.getInstance();
