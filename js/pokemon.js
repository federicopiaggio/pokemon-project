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
<<<<<<< HEAD
=======
        console.log("PlayerPoke ha atacado");
        console.log("el daño es" + damage);
        console.log("La vida de EnemyPoke es" + gameStates.enemyPoke.life);
>>>>>>> 2bef6c1662b2d3a8a4a2bac91d8846927b883cc8
    }

}


