RitchBaffle = {
    names: [],
    counter: 0,
    
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
     * Remove all traces of a name from existence.
     * @param {string} name - The name to purge.
     *
     */
    removeName: function(nameToRemove) {
        var newArray = [];
        $.each(RitchBaffle.names, function(index, name){
            if(name != nameToRemove) {
                newArray.push(name);
            }
        });
        RitchBaffle.names = newArray;
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
            
            var td = $("<td/>");
            var button = $("<a class='delete' href='#'><img src='img/delete.png' /></a>");
            button.data("name", name);
            button.appendTo(td);
            td.appendTo(tr);
            
            element.append(tr);
        });
    },
    
    /**
     * Randomly pick a name, remove it from the array, and return it.
     * @returns {string} - A randomly chosen name.
     *
     */
    pickName: function() {
        RitchBaffle.counter++;
        if (RitchBaffle.names.length === 0) {
            return("Ticket pool is empty");
        } else {
            var random_int = Math.floor(Math.random() * RitchBaffle.names.length);
            var winner = RitchBaffle.names.splice(random_int, 1);
            return(winner[0]);
        }
    },
    
    /**
     * Map a name to an image
     * @returns {string} - The name of the image
     */
    getPicture: function(name) {
        switch(name.toLowerCase()){
            case "colath":
            case "craig":
                return "Colath.jpg";
            case "dan":
            case "dan k memes":
                return "Dan.jpg";
            case "daryl":
            case "lyraad":
            case "darwull":
                return "Daryl.jpg";
            case "beard":
            case "bread":
            case "doctor":
            case "doctorb":
            case "doctorbeard":
            case "doctorbread":
            case "germanguy":
            case "adolf":
                return "DoctorBeard.jpg";
            case "ellie":
            case "el":
            case "squig":
            case "squigs":
            case "squigma":
                return "Ellie.jpg";
            case "jen":
            case "jenbles":
            case "jenbolina":
                return "Jen.jpg";
            case "mark":
            case "mastercheese":
            case "cheese":
            case "bigcheese":
            case "chestermays":
            case "cheesemaster":
                // Png... always gotta be different.
                return "MasterCheese.png";
            case "nimble":
            case "nirnble":
            case "nimb1e":
            case "nirnb1e":
            case "nimbie":
            case "nirnbie":
            case "luke":
                return "nimble.jpg";
            case "ro":
            case "roro":
            case "rororo":
            case "rorororo":
            case "pogo":
            case "rolo":
            case "rolopogo":
                return "Ro.jpg";
            case "sam":
            case "som":
            case "litarus":
                return "Sam.jpg";
            case "saph":
            case "saphy":
            case "saphyrean":
            case "chromeraptor":
            case "sophie":
            case "soph":
                return "Saph.jpg";
            case "unspoken":
            case "spoken":
            case "unspooken":
            case "spooken":
            case "spooky":
            case "spoopy":
            case "spooks":
            case "spoops":
            case "jamie":
            case "jammie":
            case "jammy":
                return "Unspoken.jpg";
            default:
                return "dahouse.jpg";
        }
    }
    
}
