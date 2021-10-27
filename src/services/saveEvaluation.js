const local = localStorage;

export function getReviews() {
  if (local.getItem('review') === null) {
    local.setItem('review', JSON.stringify([]));
  }
  return JSON.parse(local.getItem('review'));
}

export function addReview(review) {
  const reviewList = getReviews();
  const newReviewList = [...reviewList, review]
  local.setItem('review', JSON.stringify(newReviewList));
}
