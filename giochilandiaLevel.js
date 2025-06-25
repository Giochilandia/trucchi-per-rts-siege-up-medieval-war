/**
 * GiochilandiaLevel - Simple Level Progression Manager
 * Author: Giochilandia
 * License: Custom
 */

class GiochilandiaLevel {
    /**
     * Initializes the level system.
     * @param {number} maxLevel - Maximum achievable level.
     */
    constructor(maxLevel = 10) {
        if (typeof maxLevel !== 'number' || maxLevel < 1) {
            throw new Error('[GiochilandiaLevel] Invalid maximum level.');
        }
        this.currentLevel = 1;
        this.maxLevel = maxLevel;
    }

    /**
     * Advances to the next level, if possible.
     */
    next() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log(`[GiochilandiaLevel] Advanced to level ${this.currentLevel}.`);
        } else {
            console.log('[GiochilandiaLevel] Maximum level reached.');
        }
    }

    /**
     * Resets the level to 1.
     */
    reset() {
        this.currentLevel = 1;
        console.log('[GiochilandiaLevel] Level reset to 1.');
    }

    /**
     * Gets the current level.
     * @returns {number}
     */
    getLevel() {
        return this.currentLevel;
    }
}

// Example usage:
// const levelSystem = new GiochilandiaLevel(5);
// levelSystem.next(); // Level 2
// levelSystem.next(); // Level 3
// console.log(levelSystem.getLevel()); // Output: 3
// levelSystem.reset();

module.exports = GiochilandiaLevel;
