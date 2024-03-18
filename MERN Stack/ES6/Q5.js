//Do not alter the starter code
function main(){

    //Create Character constructor function
    function Character(health,strength,agility){
        this.health = health;
         this.strength =strength ; 
        this.agility =agility ; 
    }
    
    //Create Warrior ,Mage, Enemy and Archer constructor fntion inheriting Character
    // creating the another counstocter 
    function Warrior(health,strength,agility,weaponType){
        this.weaponType = weaponType ; 
        // inheritance the property 
        Character.call(this,health,strength,agility);
    }
      function Mage(health,strength,agility,spellType){
        this.spellType = spellType ; 
        // inheritance the property 
        Character.call(this,health,strength,agility);
    }
      function Archer(health,strength,agility,arrowType){
        this.arrowType = arrowType ; 
        // inheritance the property 
        Character.call(this,health,strength,agility);
          
    }
    
    //Create constructor function for Hero inheriting Hero and Mage
    function Hero(health,strength,agility,weaponType,spellType,specialAbility){
        this.specialAbility = specialAbility;
         Warrior.call(this,health,strength,agility,weaponType);
         Mage.call(this,health,strength,agility,spellType);
    }
    
    function Enemy(health,strength,agility,enemyType){
        this.enemyType = enemyType;
         Character.call(this,health,strength,agility)
    }
    
    let warrior1 = new Warrior(100, 50, 30, "sword");
    let mage1 = new Mage(80, 20, 50, "fireball");
    let archer1 = new Archer(90, 40, 40, "poison");
    let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
    let enemy1 = new Enemy(200, 80, 20, "goblin");
    
    console.log(warrior1);
    console.log(mage1);
    console.log(archer1);
    console.log(hero1);
    console.log(enemy1);
    
    return {Character,Hero,Warrior,Mage,Archer,Enemy};
    }
    main() ; 