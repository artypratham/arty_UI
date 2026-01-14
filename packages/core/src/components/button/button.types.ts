import * as React from 'react';

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

export interface BUttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant? : ButtonVariant;
    size? :ButtonSize;
}