import {BACKEND_API_BASE_URL, MOCK_BACKEND} from "@/app/api/Constants";
import {revalidateTag} from "next/cache";
import {IApiEndpoints} from "@/app/api/IApiEndpoints";
import {LoginDto} from "./dataStructure/LoginDto";
import {PaperDto} from "./dataStructure/PaperDto";
import {PaperReviewsDto} from "./dataStructure/PaperReviewsDto";
import {ReviewDto} from "./dataStructure/ReviewDto";
import {SingleReviewDto} from "./dataStructure/SingleReviewDto";
import ApiServiceMock from "@/app/api/ApiServiceMock";

const paperTag: string = "paperCache";

class ApiService implements IApiEndpoints {
  private static instance: IApiEndpoints;

  private constructor() {
  }

  public static getInstance(): IApiEndpoints {
    if (!ApiService.instance) {
      if (MOCK_BACKEND) {
        ApiService.instance = new ApiServiceMock();
      } else {
        ApiService.instance = new ApiService();
      }
    }

    return ApiService.instance;
  }

  authenticateUserEndpoint(userDto: LoginDto): Promise<any> {
    return this.get(endpointEnum.authorizeRoute, userDto)
  }

  getOpenReviewsEndpoint(): Promise<PaperDto[]> {
    return this.get(endpointEnum.ownOpenReviewsRoute, null)
  }

  getSubmittedReviewsEndpoint(): Promise<PaperDto[]> {
    return this.get(endpointEnum.ownSubmittedReviewsRoute, null)
  }

  getDraftReviewsEndpoint(): Promise<PaperDto[]> {
    return this.get(endpointEnum.ownDraftsReviewsRoute, null)
  }

  getSingleReviewEndpoint(): Promise<SingleReviewDto> {
    return this.get(endpointEnum.singleReviewRoute, null)
  }

  postReviewEndpoint(reviewDto: ReviewDto): Promise<any> {
    return this.post(endpointEnum.singleReviewRoute, reviewDto)
  }

  getPaperReviewsEndpoint(paperId: string): Promise<PaperReviewsDto> {
    return this.get(endpointEnum.paperReviewsRoute, paperId)
  }

  private getApiUrl(endpoint: endpointEnum): string {
    return `${BACKEND_API_BASE_URL}${endpoint.valueOf()}`
  }

  private async post(endpoint: endpointEnum, data: any | void): Promise<any> {
    const url = this.getApiUrl(endpoint);
    const fetchOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok)
      this.reportErrorToUser(response);

    revalidateTag(paperTag); // TODO: only invalidate cache on new review post
    return response.json();
  }

  private reportErrorToUser(response: Response) {
    throw new Error('Backend operation failed: ' + response.statusText)
  }

  private async get(endpoint: endpointEnum, data: any): Promise<any> {
    const url = this.getApiUrl(endpoint);

    let nextOptions = {};
    if (endpoint in [
      endpointEnum.ownOpenReviewsRoute,
      endpointEnum.ownDraftsReviewsRoute,
      endpointEnum.ownSubmittedReviewsRoute,
      endpointEnum.singleReviewRoute,
    ]) {
      nextOptions = {
        tags: [paperTag]
      };
    }

    const fetchOptions = {
      method: 'GET',
      next: nextOptions,
      body: JSON.stringify(data)
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok)
      this.reportErrorToUser(response);

    return response.json();
  }
}

export default ApiService.getInstance();
