RitchBaffle = {
    names: [],
    
    /**
     * Add a name to the internal array.
     * @param {string} name - The name to add.
     * @param {number} number - Number of tickets to add for that name.
     *
     */
    addName: function(name, number) {
        for (var i=0; i < number; i++) {
            RitchBaffle.names.push(name);
        }
    },

    /**
     * Update the UI to show the current names.
     * @param {obj} element - Jquery object to append the names to.
     *
     */    
    showNames: function(element) {
        element.html("");
        
        var namesMap = {};
        
        $.each(RitchBaffle.names, function(index, name){
            if(!namesMap[name]){
                namesMap[name] = 1;
            }
            else {
                namesMap[name] = namesMap[name] + 1;
            }
        });
        
        $.each(namesMap, function(name, count){
            var tr = $("<tr/>");
            $("<td/>").text(name).appendTo(tr);
            $("<td/>").text(count).appendTo(tr);           
            element.append(tr);
        });
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
