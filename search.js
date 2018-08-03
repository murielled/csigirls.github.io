function mySearch() {
    var filterStudent, indivStudent, a, i;
    
    filterStudent = document.getElementById("searchInput").value.toLowerCase();
    
    indivStudent = document.getElementById("classList").getElementsByTagName("li");
    
    for(i = 0; i < indivStudent.length; i++) {
        a = indivStudent[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toLowerCase().indexOf(filterStudent) > -1){
            indivStudent[i].style.display = "";
        } else {
            indivStudent[i].style.display = "none";
        }   
    }
}