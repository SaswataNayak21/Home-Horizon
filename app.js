const dataset = [
    { age: 32, distance: 84.87882, stores: 10, price: 37.9 },
    { age: 19.5, distance: 306.5947, stores: 9, price: 42.2 },
    { age: 13.3, distance: 561.9845, stores: 5, price: 47.3 },
    { age: 13.3, distance: 561.9845, stores: 5, price: 54.8 },
    { age: 5, distance: 390.5684, stores: 5, price: 43.1 },
    { age: 7.1, distance: 2175.03, stores: 3, price: 32.1 },
    { age: 34.5, distance: 623.4731, stores: 7, price: 40.3 },
    { age: 20.3, distance: 287.6025, stores: 6, price: 46.7 },
    { age: 31.7, distance: 5512.038, stores: 1, price: 18.8 },
    { age: 17.9, distance: 1783.18, stores: 3, price: 22.1 },
    { age: 34.8, distance: 405.2134, stores: 7, price: 41.4 },
    { age: 6.3, distance: 90.45606, stores: 9, price: 58.1 },
    { age: 13, distance: 492.2313, stores: 5, price: 39.3 },
    { age: 20.4, distance: 2469.645, stores: 4, price: 23.8 },
    { age: 13.2, distance: 1164.838, stores: 4, price: 34.3 },
    { age: 35.7, distance: 579.2083, stores: 2, price: 50.5 },
    { age: 0, distance: 292.9978, stores: 6, price: 70.1 },
    { age: 17.7, distance: 350.8515, stores: 1, price: 37.4 },
    { age: 16.9, distance: 368.1363, stores: 8, price: 42.3 },
    { age: 1.5, distance: 23.38284, stores: 7, price: 47.7 },
    { age: 10.5, distance: 2275.877, stores: 3, price: 29.3 },
    { age: 10.5, distance: 279.1726, stores: 7, price: 51.6 },
    { age: 14.7, distance: 1360.139, stores: 1, price: 24.6 },
    { age: 10.1, distance: 279.1726, stores: 7, price: 47.9 },
    { age: 39.6, distance: 480.6977, stores: 4, price: 38.8 },
    { age: 29.3, distance: 1487.868, stores: 2, price: 27 },
    { age: 3.1, distance: 383.8624, stores: 5, price: 56.2 },
    { age: 10.4, distance: 276.4949, stores: 5, price: 33.6 },
    { age: 19, distance: 557.478, stores: 4, price: 47 },
    { age: 7.1, distance: 451.2438, stores: 5, price: 57.1 }
];

const maxAge = Math.max(...dataset.map(item => item.age));
const maxDistance = Math.max(...dataset.map(item => item.distance));

function predictPrice() {
    let age = parseFloat(document.getElementById('age').value);
    let distance = parseFloat(document.getElementById('distance').value);
    let stores = parseFloat(document.getElementById('stores').value);
    let resultElement = document.getElementById('result');

    if (isNaN(age) || isNaN(distance) || isNaN(stores)) {
        alert('Please enter valid numbers');
        return;
    }

    if (age > maxAge || distance > maxDistance) {
        resultElement.innerText = "No match found (Input exceeds dataset limits)";
        return;
    }

    const weightAge = 2;
    const weightDistance = 0.01;
    const weightStores = 1.5;

    let bestMatch = null;
    let bestScore = Number.MAX_VALUE;

    dataset.forEach(item => {
        let ageDiff = Math.abs(item.age - age);
        let distanceDiff = Math.abs(item.distance - distance);
        let storeDiff = Math.abs(item.stores - stores);

        let score = (ageDiff * weightAge) + (distanceDiff * weightDistance) + (storeDiff * weightStores);

        if (score < bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    });

    if (bestMatch) {
        resultElement.innerText = `Predicted Price: $${bestMatch.price.toFixed(2)} (Best Match Found)`;
    } else {
        resultElement.innerText = "No match found";
    }
}