document.getElementById('nphrForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalHeatInput = parseFloat(document.getElementById('totalHeatInput').value);
    const netPowerOutput = parseFloat(document.getElementById('netPowerOutput').value);

    if (isNaN(totalHeatInput) || isNaN(netPowerOutput) || totalHeatInput <= 0 || netPowerOutput <= 0) {
        alert('Please enter valid numbers greater than zero.');
        return;
    }

    const nphr = totalHeatInput / netPowerOutput;

    document.getElementById('result').textContent = `Net Plant Heat Rate (NPHR): ${nphr.toFixed(2)} BTU/kWh`;
});
