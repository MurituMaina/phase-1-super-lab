// Write your classes here
class Tree{
    constructor( species ){
        this.species = species
    }
    static definition(){
        return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`
    }
}

  
class Deciduous extends Tree {
    constructor(species,name){
        super(species)
        this.name = name;
    }
    static definition(){
    let defn = super.definition()
    return `${defn} Deciduous trees shed their leaves annually.`
    }
}



class Evergreen extends Tree{
    constructor(species, name){
    super( species )
    this.name = name;
}

    static definition(){
       let defn = super.definition()
        return `${defn} Evergreens keep their leaves all year round.`
    }
}