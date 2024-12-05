export function formatDate(dateString: string): string {
    if (!dateString) {
      return "After 6 months"; // Handle unknown dates
    }
  
    const atpDate = new Date(dateString);
    const today = new Date();
  
    if (isNaN(atpDate.getTime())) {
      return "After 6 months"; // Handle invalid dates
    }
  
    // Calculate the difference in days
    const diffInTime = atpDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24)); // Convert to days
  
    if (diffInDays <= 4) {
      return "In 1 week";
    } else if (diffInDays <= 11) {
      return "In 2 weeks";
    } else if (diffInDays <= 18) {
      return "In 3 weeks";
    } else if (diffInDays <= 27) {
      return "In 4 weeks";
    } else if (diffInDays <= 60) {
      return "In 2 months";
    } else if (diffInDays <= 90) {
      return "In 3 months";
    } else {
      return "After 6 months";
    }
  }
  