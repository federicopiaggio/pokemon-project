//Clase de Pokemon estructura

class Pokemon{
    constructor(name, life, type, level, attacks, defense){
        this.name = name;
        this.life = life;
        this.type = type;
        this.level = level;
        this.attacks = attacks;
        this.defense = defense;
    }

    attack(enemy, damage){
    
        damage -= enemy.defense;
        enemy.life -= damage;
        console.log("el daño es " + damage);
        console.log("la vida del " + enemy.name + "es" + enemy.life);
        return damage;
    }
}