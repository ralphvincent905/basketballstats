document.addEventListener("DOMContentLoaded", function() {
    createPlayerRows("team1Table");
    createPlayerRows("team2Table");
});

function createPlayerRows(teamTable) {
    let table = document.getElementById(teamTable).querySelector("tbody");
    
    for (let i = 1; i <= 12; i++) {
        let row = table.insertRow();
        row.innerHTML = `
            <td><input type='number' value='${i}' class='player-number'></td>
            <td><input type='text' class='player-name' placeholder='Player Name'></td>
            <td><input type='number' class='fouls'></td>
            <td><input type='number' class='points' oninput="updateScore('${teamTable}')"></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
            <td><input type='number'></td>
        `;
    }
}

function updateScore(teamTable) {
    let totalScore = 0;
    let table = document.getElementById(teamTable);
    let scoreDisplay = document.getElementById(teamTable === "team1Table" ? "team1Score" : "team2Score");

    table.querySelectorAll(".points").forEach(input => {
        totalScore += parseInt(input.value) || 0;
    });

    scoreDisplay.textContent = totalScore;
}

function resetStats() {
    document.querySelectorAll("tbody").forEach(table => table.innerHTML = "");
    createPlayerRows("team1Table");
    createPlayerRows("team2Table");
    document.getElementById("team1Score").textContent = "0";
    document.getElementById("team2Score").textContent = "0";
}
