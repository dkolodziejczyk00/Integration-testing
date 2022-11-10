import {getRectangleArea, getRectangleInfo, getRectanglePerimeter} from "../js/rectangle";


test ('Should generate a rectangle perimeter', () => {
    const outputRectanglePerimeter = getRectanglePerimeter(4, 5);
    expect(outputRectanglePerimeter).toBe(18);
})

test ('should generate a rectangle area', () => {
    const outputRectangleArea = getRectangleArea(4, 5);
    expect(outputRectangleArea).toBe(20);
})

test ('should generate a rectangle info', () => {
    const outputRectangleInfo = getRectangleInfo(4, 5);
    expect(outputRectangleInfo).toBe(console.log('The perimeter of a rectangle is 18 and the area is 20'));
})
