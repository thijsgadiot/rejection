export const mapStatusToScore = (status) => (status === "REJECTED" ? 100 : status === "ACCEPTED" ? 10 : 0);
