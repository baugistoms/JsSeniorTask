const firstLand = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
    ];
const secondLand = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0]
    ];
const thirdLand = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0]
    ];
function possibleFortress(area, target) {
    let previousPartOfLand;
    let currentPartOfLand;
    let nextPartOfLand;
    let currentNorthNode;
    let previousNodeOfCurrentLand;
    let currentNodeOfCurrentLand;
    let nextNodeOfCurrentLand;
    let currentSouthNode;
    let successCount = 0;
    for (let i = 0; i < area.length; i++) {
        previousPartOfLand = area[i - 1];
        currentPartOfLand = area[i];
        nextPartOfLand = area[i + 1];
        for (let j = 0; j < currentPartOfLand.length; j++) {
            currentNorthNode = typeof previousPartOfLand === 'undefined' ? 0 : previousPartOfLand[j];
            previousNodeOfCurrentLand = currentPartOfLand[j - 1];
            currentNodeOfCurrentLand = currentPartOfLand[j];
            nextNodeOfCurrentLand = currentPartOfLand[j + 1];
            currentSouthNode = typeof nextPartOfLand === 'undefined' ? 0 : nextPartOfLand[j];
            if (
                (currentNodeOfCurrentLand === 1 && previousNodeOfCurrentLand == 1) || 
                (currentNodeOfCurrentLand === 1 && nextNodeOfCurrentLand === 1) ||
                (currentNodeOfCurrentLand === 1 && currentNorthNode === 1) ||
                (currentNodeOfCurrentLand === 1 && currentSouthNode === 1)
                ) {
                    successCount++;
                }
        }
    }
    if (successCount === target || successCount > target) {
        console.log('Land contains a sufficient fortress!');
        return true;
    } else {
        console.log('Fortress on the provided land is not big enough, or does not exist at all');
        return false;
    }
}

possibleFortress(firstLand, 5);
possibleFortress(secondLand, 4);
possibleFortress(thirdLand, 6);