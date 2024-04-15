import {getSingleReview} from "@/app/helpers/fetchReviewHelper";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(reviewId: string) {
  const data = await getSingleReview(reviewId);

  return Response.json({data})
}
