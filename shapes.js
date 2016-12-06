// using ES6
class Cube {
    constructor(n) {
        this.length = n ;
    }
    area() {
        return this.length * this.length;
    }
    volume() {
        return this.length * this.length * this.length;
    }
};

/////////////////////////////////////////////////////////////////
class Sphere {
    constructor(diameter) {
        this.diameter = diameter ;
        this.radius = diameter / 2 ;
    }
    area() {

    }
    volume() {
        // 4/3*pi*r^3
        let pi = 3.1415 ;
        lex x = 1.333333333333333 ;
        let y = (x * pi) * (this.radius() * this.radius() * this.radius() );
        return y ;
    }
    radius() {
        this.radius ;
    }
    circumference() {
        return (2 * Math.PI * this.radius())
    }
}

function Sphere {

}