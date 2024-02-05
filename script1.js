//Question 2
class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage:
  const circle1 = new Circle();
  const circle2 = new Circle(10.05);
  const circle3 = new Circle(5.5,"Black");
  
  console.log(circle1.toString()); // Output: Circle[radius=1, color=red]
  console.log("Area:",circle1.getArea().toFixed(3)); // Output: 3.142
  console.log("Circumference:",circle1.getCircumference().toFixed(3)); // Output: 6.283

  //Circle 2
  console.log(circle2.toString()); // Output: Circle[radius=10.05, color=red]
  console.log("Area:",circle2.getArea().toFixed(3)); // Output: 317.309
  console.log("Circumference:",circle2.getCircumference().toFixed(3)); // Output: 63.146

  //Circle 3
  console.log(circle3.toString()); // Output: Circle[radius=5.5, color=Black]
  console.log("Area:",circle3.getArea().toFixed(3)); // Output : 95.033
  console.log("Circumference:",circle3.getCircumference().toFixed(3)); // Output: 34.558
  