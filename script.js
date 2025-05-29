document.addEventListener("DOMContentLoaded", function() {
    createPlayerRows("team1Table");
    createPlayerRows("team2Table");
});

function createPlayerRows(teamTable) {
    let table = document.getElementById(teamTable).querySelector("tbody");

    for (let i = 1; i <= 15; i++) {
        let row = table.insertRow();
        row.innerHTML = `
            <td><input type='text'></td>
            <td><input type='text' class='player-name' placeholder='Player Name'></td>
            <td><input type='number' class='fouls'></td>
            <td><input type='number' class='points' readonly></td>
            <td><input type='number' class='twoPt' oninput="updateScore('${teamTable}')"></td>
            <td><input type='number' class='threePt' oninput="updateScore('${teamTable}')"></td>
            <td><input type='number' class='fta' oninput="updateScore('${teamTable}')"></td>
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

    table.querySelectorAll("tbody tr").forEach(row => {
        let twoPt = parseInt(row.querySelector(".twoPt").value) || 0;
        let threePt = parseInt(row.querySelector(".threePt").value) || 0;
        let fta = parseInt(row.querySelector(".fta").value) || 0;
        let playerPoints = (twoPt * 2) + (threePt * 3) + (fta * 1);
        
        row.querySelector(".points").value = playerPoints; // Update individual player score
        totalScore += playerPoints; // Add to total team score
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
