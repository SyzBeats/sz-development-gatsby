import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Terminal = () => {
  const [command, setCommand] = useState("");

  const submitCommand = e => {
    e.preventDefault();
    console.log(command);
  };

  return (
    <TerminalContainer>
      <TerminalWindow>
        <div className='infoSection'>
          <CommandLine>
            <GreenCommand>Simeon Zimmermann - </GreenCommand>
            <span>Web Development & Web Design</span>
          </CommandLine>
          <CommandLine>
            <span>Sie Können diese Website normal nutzen oder durch dieses Terminal interagieren...</span>
          </CommandLine>
          <CommandLine>
            <span>Nutzen Sie hierzu die folgenden Befehle, um zu navigieren:</span>
          </CommandLine>
          <CommandLine>
            <GreenCommand>open profile - </GreenCommand>
            <BlueCommand>Alles über Simeon Zimmermann</BlueCommand> <br />
            <BeforeCommand />
            <GreenCommand>open portfolio - </GreenCommand>
            <BlueCommand>Meine bisherigen Projekte (und github Link):</BlueCommand> <br />
            <BeforeCommand />
            <GreenCommand>open contact - </GreenCommand>
            <BlueCommand>Nehmen Sie Kontakt mit mir auf:</BlueCommand>
          </CommandLine>
        </div>
        <form action='' onSubmit={e => submitCommand(e)}>
          <TerminalForm onChange={e => setCommand(e.currentTarget.value)} type='text' placeholder='Befehl eingeben' />
          <button type='submit' hidden></button>
        </form>
      </TerminalWindow>
    </TerminalContainer>
  );
};

const TerminalContainer = styled.aside`
  position: relative;
  z-index: 100;
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TerminalWindow = styled.section`
  background: rgba(0, 0, 0, 0.78);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 40rem;
  width: 80vw;
  max-width: 85rem;
  padding: 3.5rem;
  text-align: left;
  color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CommandLine = props => {
  return (
    <p>
      <pre style={{ whiteSpace: "normal" }}>
        <span>~/ # </span>
        {props.children}
      </pre>
    </p>
  );
};
const BeforeCommand = props => {
  return (
    <pre style={{ whiteSpace: "normal", display: "inline", padding: "0" }}>
      <span>~/ # </span>
    </pre>
  );
};

const GreenCommand = styled.span`
  color: #14b111;
  text-transform: uppercase;
`;
const BlueCommand = styled.span`
  color: #2f8dd1;
`;

const TerminalForm = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff7;
  width: 100%;
  padding: 0.5rem;
  height: 2.5rem;
  outline: none;
  color: white;
  font-size: 2.5rem;
  font-family: monospace;
`;
export default Terminal;
