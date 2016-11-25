RitchBaffle = {
    names: [],
    
    /**
     * Add a name to the internal array.
     * @param {string} name - The name to add.
     *
     */
    addName: function(name, number) {
        for (var i=0; i < number; i++) {
            RitchBaffle.names.push(name);
        }
    },

    /**
     * Update the UI to show the current names.
     *
     */    
    showNames: function() {
        //TODO: make this do something nicer than just an alert
        alert(RitchBaffle.names);
    },
    
    /**
     * Randomly pick a name, remove it from the array, and return it.
     * @returns {string} - A randomly chosen name.
     *
     */
    pickName: function() {
        if (RitchBaffle.names.length === 0) {
            alert("Ticket pool is empty");
        } else {
            var random_int = Math.floor(Math.random() * RitchBaffle.names.length);
            var winner = RitchBaffle.names.splice(random_int, 1);
            alert(winner[0]);
        }
    }
    
}
