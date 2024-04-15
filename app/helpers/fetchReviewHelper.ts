import {ReviewStateEnum} from "@/app/api/dataStructure/ReviewStateEnum";
import ApiService from "@/app/api/ApiService";
import {ReviewPaperDto} from "@/app/api/dataStructure/ReviewPaperDto";

const apiService = ApiService.getInstance()

export async function getReviewList(state: ReviewStateEnum) {
  const res = await apiService.getReviewsEndpoint(state)

  if (!res.ok) {
    console.log("Data fetching failed.")
    throw new Error('Failed to fetch data');
  }

  const data = await res.json() as ReviewPaperDto[]
  console.log(data)

  return data
}
