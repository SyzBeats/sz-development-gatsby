export function commandExists(command, commandList) {
  return commandList.includes(command.toLowerCase());
}
