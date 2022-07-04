import React from 'react';

// 1. Input should have focus only if shouldFocus it true
// 2. Input should have focus on first render only.

export default function CustomInput(props) {
  return <input placeholder={props?.value} />;
}
