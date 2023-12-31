import React, { useEffect, useRef } from "react";

export function FocusInput() {
  const inputRef = useRef(null);
  //   console.log("inputref", inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="username">Username: </label>
        <input ref={inputRef} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
      </div>
    </div>
  );
}
