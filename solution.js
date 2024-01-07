class Stacker {
    constructor() {
        this.turn = (mapInfo) => {
            // Pick an action randomly
            var n = Math.random() * 6 >> 0;
            if (n == 0)
                return "left";
            if (n == 1)
                return "up";
            if (n == 2)
                return "right";
            if (n == 3)
                return "down";
            if (n == 4)
                return "pickup";
            if (n == 5)
                return "drop";
            // Check if there is a wall
            if (mapInfo.left.type === 1
                || mapInfo.up.type === 1
                || mapInfo.right.type === 1
                || mapInfo.down.type === 1) {
                this.hasWall = true;
            }
            // Check if there is a block at the current position & Pick Up a block
            if (mapInfo.type === 2) {
                this.hasBlock = true;
                return 'pickup';
            }
            // Check if the treasure is found
            if (mapInfo.type === 3) {
                this.hasTreasure = true;
            }
            // Move around a wall if True
            if (this.hasWall) {
                if (mapInfo.up.type === 1) {
                    return 'down';
                }
                if (mapInfo.down.type === 1) {
                    return 'right';
                }
                if (mapInfo.right.type === 1) {
                    return 'left';
                }
            }
            // If the agent has a block, build a staircase
            if (this.hasBlock) {
                return mapInfo.level <= 1 ? 'drop' : 'up';
            }
            else {
                // Move towards the treasure if not found
                if (this.hasTreasure) {
                    if (mapInfo.right.type === 0) {
                        return 'right';
                    }
                    if (mapInfo.up.type === 0) {
                        return 'up';
                    }
                    if (mapInfo.left.type === 0) {
                        return 'left';
                    }
                    if (mapInfo.down.type === 0) {
                        return 'down';
                    }
                }
            }
            // Default action is to wait
            return '';
        };
        this.currentPosition = { x: 0, y: 0 };
        this.hasTreasure = false;
        this.hasBlock = false;
        this.hasWall = false;
    }
}
const _default = Stacker;
//# sourceMappingURL=solution.js.map