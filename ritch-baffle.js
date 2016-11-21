RitchBaffle = {
    names: [],
    
    /**
     * Add a name to the internal array.
     * @param {string} name - The name to add.
     *
     */
    addName: function(name) {
        RitchBaffle.names.push(name);
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
        //TODO: implement this
    }
    
}
