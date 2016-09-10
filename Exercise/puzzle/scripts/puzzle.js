window.onload = initPage;

function initPage() {
    var table = document.getElementById("puzzleGrid");
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.onclick = tileClick;
    }
}

function tileClick() {
    // alert("You clicked me!");
    if (cellIsEmpty(this)) {
        alert("Please click on a numbered tile.");
    }

    var currentRow = this.id.charAt(4);
    var currentCol = this.id.charAt(5);

    // check above
    if (currentRow > 1) {
        var testRow = Number(currentRow) - 1;
        var testCellId = "cell" + testRow + currentCol;
        var testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    // check bottom
    if (currentRow < 9) {
        var testRow = Number(currentRow) + 1;
        var testCellId = "cell" + testRow + currentCol;
        var testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    // check left
    if (currentCol > 1) {
        var testCol = Number(currentCol) - 1;
        var testCellId = "cell" + currentRow + testCol;
        var testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    // check right
    if (currentCol < 9) {
        var testCol = Number(currentCol) + 1;
        var testCellId = "cell" + currentRow + testCol;
        var testCell = document.getElementById(testCellId);
        if (cellIsEmpty(testCell)) {
            swapTiles(this, testCell);
            return;
        }
    }

    // The clicked-on cell is locked
    alert("Please click a tile next to an empty cell.");
}

function cellIsEmpty(cell) {
    var image = cell.firstChild;
    if (image.alt == "empty") {
        return true;
    } else {
        return false;
    }
}

function swapTiles(selectedCell, destinationCell) {
    selectedImage = selectedCell.firstChild;
    destinationImage = destinationCell.firstChild;
    selectedCell.appendChild(destinationImage);
    destinationCell.appendChild(selectedImage);
}
