var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function (snack, hobby){
    console.log(this.getPokeName() + 'I choose you!' );
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};


var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

pokemonName.apply(pokemon , ['hello' , 'how'])
logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms