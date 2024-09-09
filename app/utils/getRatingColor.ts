export const getRatingColor = (
  rating: number
): "success" | "warning" | "danger" => {
  if (rating >= 70) {
    return "success";
  } else if (rating >= 50) {
    return "warning";
  } else return "danger";
};
