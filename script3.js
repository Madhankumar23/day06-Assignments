//Question 4
class UberPriceCalculator {
    constructor(distance, duration, surgeMultiplier = 1) {
      this.distance = distance; // in kilometers
      this.duration = duration; // in minutes
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculateBasePrice() {
      const baseRate = 100 ; // Base rate 
      return baseRate;
    }
  
    calculateDistancePrice() {
      if(this.distance<4)
            return this.calculateBasePrice(); 
      const pricePerKilometer = 25; // Price per kilometer 
      return this.distance * pricePerKilometer;
    }
  
    calculateTimePrice() {
      if(this.duration<=5)
         return 0;
      const pricePerMinute = 1; // Price per minute 
      return this.duration * pricePerMinute;
    }
  
    calculateSurgePrice() {
      return this.calculateBasePrice() + this.calculateDistancePrice() + this.calculateTimePrice();
    }
  
    calculateTotalPrice() {
      return this.calculateSurgePrice() * this.surgeMultiplier;
    }
  }
  
  // Example usage:
  const uberRide = new UberPriceCalculator(3, 5, 1); // 3 km, 5minutes, surge multiplier 1x
  const totalPrice = uberRide.calculateTotalPrice();
  
  console.log(`Uber Ride Details:`);
  console.log(`Base Price: Rs.${uberRide.calculateBasePrice()}`);
  console.log(`Distance Price: Rs.${uberRide.calculateDistancePrice()}`);
  console.log(`Time Price: Rs.${uberRide.calculateTimePrice()}`);
  console.log(`Total Price: Rs.${totalPrice}`);
  