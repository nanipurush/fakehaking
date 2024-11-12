const output = document.getElementById('output');

// Fake data for display
const fakeCommands = [
  "Initializing secure connection...",
  "Attempting to access host: 192.168.1.10",
  "Bypassing firewall...",
  "Running privilege escalation script...",
  "Downloading secure files...",
  "File 01 - HIDDEN: Downloading... ██▒▒▒▒▒▒▒▒▒▒▒▒",
  "File 02 - SECRETS: Downloading... ████▒▒▒▒▒▒▒▒▒",
  "File 03 - ACCESS_KEYS: Downloading... ██████▒▒▒▒▒",
  "File 04 - SYSTEM_LOGS: Downloading... ████████▒▒▒",
  "Encryption key acquired.",
  "Access to secure system granted.",
  "Injecting payload...",
  "Transferring data...",
  "Session terminated. Remote server connection lost."
];

// Display fake commands with typewriter effect
function typeCommand(command, index, callback) {
  let charIndex = 0;
  function typeChar() {
    if (charIndex < command.length) {
      output.innerHTML += command[charIndex];
      charIndex++;
      setTimeout(typeChar, 50);  // Adjust typing speed here
    } else {
      output.innerHTML += "\n"; // New line after each command
      callback();
    }
  }
  typeChar();
}

// Loop through fake commands
function displayCommands(commands) {
  let i = 0;
  function nextCommand() {
    if (i < commands.length) {
      typeCommand(commands[i], i, nextCommand);
      i++;
    } else {
      output.innerHTML += "\n<Process Complete>";
    }
  }
  nextCommand();
}

// Start displaying commands with fake cursor
displayCommands(fakeCommands);

// Blinking cursor at the end
const cursor = document.createElement("span");
cursor.classList.add("cursor");
output.appendChild(cursor);
setInterval(() => {
  cursor.style.display = cursor.style.display === "none" ? "inline-block" : "none";
}, 500);
