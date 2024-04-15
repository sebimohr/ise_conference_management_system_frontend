import {BACKEND_API_BASE_URL} from "@/app/api/Constants";
import {UserDto} from "./dataStructure/UserDto";
import {ReviewDto} from "./dataStructure/ReviewDto";
import {EndpointEnum} from "./dataStructure/EndpointEnum";
import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import {getAuthSessionKey} from "@/app/api/SessionManagement";

const paperTag: string = "paperCache";

export default class ApiService {
  private static instance: ApiService;

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  authenticateUserEndpoint(loginDto: UserDto): Promise<Response> {
    return this.post(EndpointEnum.authorizeRoute, loginDto);
  }

  getReviewsEndpoint(reviewState: ReviewStateEnum): Promise<Response> {
    let routeToUse: EndpointEnum;

    switch (reviewState) {
      case ReviewStateEnum.open:
        routeToUse = EndpointEnum.ownOpenReviewsRoute;
        break;
      case ReviewStateEnum.draft:
        routeToUse = EndpointEnum.ownDraftsReviewsRoute;
        break;
      case ReviewStateEnum.submitted:
        routeToUse = EndpointEnum.ownSubmittedReviewsRoute;
        break;
    }

    return this.get(routeToUse);
  }

  getSingleReviewEndpoint(paperId: string): Promise<Response> {
    return this.get(EndpointEnum.singleReviewRoute);
  }

  postReviewEndpoint(reviewDto: ReviewDto): Promise<Response> {
    return this.post(EndpointEnum.singleReviewRoute, reviewDto);
  }

  getPaperReviewsEndpoint(paperId: string): Promise<Response> {
    return this.get(EndpointEnum.paperRoute);
  }

  private getApiUrl(endpoint: EndpointEnum): string {
    return `${BACKEND_API_BASE_URL}${endpoint.valueOf()}`;
  }

  private async post(
    endpoint: EndpointEnum,
    data: any = null
  ): Promise<Response> {
    const token = await getAuthSessionKey();

    if (token == undefined && endpoint != EndpointEnum.authorizeRoute) {
      this.reportErrorToUser("Unauthorized action")
    }

    const url = this.getApiUrl(endpoint);
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    // noinspection UnnecessaryLocalVariableJS
    const response = await fetch(url, fetchOptions);

    // revalidateTag(paperTag); // TODO: only invalidate cache on new review post
    return response;
  }

  private reportErrorToUser(errorMessage: string) {
    throw new Error("Backend operation failed: " + errorMessage);
  }

  private async get(endpoint: EndpointEnum): Promise<Response> {
    const url = this.getApiUrl(endpoint);
    const token = await getAuthSessionKey();
    /*
        let nextOptions = {};
        if (
          endpoint in
          [
            EndpointEnum.ownOpenReviewsRoute,
            EndpointEnum.ownDraftsReviewsRoute,
            EndpointEnum.ownSubmittedReviewsRoute,
            EndpointEnum.singleReviewRoute,
          ]
        ) {
          nextOptions = {
            tags: [paperTag],
          };
        }
    */

    const fetchOptions = {
      method: "GET",
      // next: nextOptions,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    };

    return await fetch(url, fetchOptions);
  }
}
