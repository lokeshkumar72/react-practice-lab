# Day 18 — React.memo Deep Dive ⚛️

## What is React.memo?

React.memo is a higher-order component used to prevent unnecessary re-renders of functional components.

## How React.memo Works

- React.memo performs a **shallow comparison** of props
- Component re-renders **only when props change**

## Why React.memo is Important

- Improves performance
- Avoids expensive re-renders
- Useful in large applications

## When to Use React.memo

- Expensive UI components
- Components receiving stable props
- Performance-critical screens

## When NOT to Use React.memo

- Simple components
- Frequently changing props
- Premature optimization

## Interview Answer (Must Remember)

"React.memo memoizes a functional component and skips re-rendering when its props remain unchanged."
