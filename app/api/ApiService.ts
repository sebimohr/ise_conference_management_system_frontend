import { BACKEND_API_BASE_URL } from "@/app/api/Constants";
import { UserDto } from "./dataStructure/UserDto";
import { ReviewDto } from "./dataStructure/ReviewDto";
import { EndpointEnum } from "./dataStructure/EndpointEnum";
import { ReviewStateEnum } from "@/app/api/dataStructure/ReviewStateEnum";
import { getAuthSessionKey } from "@/app/api/SessionManagement";

/**
 * This class is used for all requests to the backend.
 */
export default class ApiService {
  private static instance: ApiService;

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  authenticateUserEndpoint(loginDto: UserDto): Promise<Response> {
    return this.put(EndpointEnum.authorizeRoute, loginDto);
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

  getSingleReviewEndpoint(reviewId: string): Promise<Response> {
    return this.get(EndpointEnum.singleReviewRoute, reviewId);
  }

  putPapersReviewEndpoint(
    reviewDto: ReviewDto,
    reviewId: string
  ): Promise<Response> {
    return this.put(EndpointEnum.singleReviewRoute, reviewDto, reviewId);
  }

  getPaperReviewsEndpoint(paperId: string): Promise<Response> {
    return this.get(EndpointEnum.paperReviewsRoute, paperId);
  }

  private getApiUrl(endpoint: EndpointEnum, reviewId?: string): string {
    return `${BACKEND_API_BASE_URL}${endpoint.valueOf()}${
      reviewId ? `/${reviewId}` : ""
    }`;
  }

  private async put(
    endpoint: EndpointEnum,
    data: any = null,
    reviewId?: string
  ): Promise<Response> {
    const token = await getAuthSessionKey();
    if (token == undefined && endpoint != EndpointEnum.authorizeRoute) {
      this.reportErrorToUser("Unauthorized action");
    }

    const url = this.getApiUrl(endpoint, reviewId);
    const header = new Headers();
    header.set("Content-Type", "application/json");

    if (endpoint != EndpointEnum.authorizeRoute) {
      header.set("Authorization", `Bearer ${token}`);
    }

    const fetchOptions = {
      method: endpoint == EndpointEnum.authorizeRoute ? "POST" : "PUT",
      headers: header,
      body: JSON.stringify(data),
    };

    return await fetch(url, fetchOptions);
  }

  private reportErrorToUser(errorMessage: string) {
    throw new Error("Backend operation failed: " + errorMessage);
  }

  private async get(
    endpoint: EndpointEnum,
    reviewId?: string
  ): Promise<Response> {
    const url = this.getApiUrl(endpoint, reviewId);
    const token = await getAuthSessionKey();

    const header = new Headers();
    header.set("Content-Type", "application/json");
    header.set("Authorization", `Bearer ${token}`);

    const fetchOptions = {
      method: "GET",
      headers: header,
    };

    return await fetch(url, fetchOptions);
  }
}
