import { primitiveColors } from "../primitives/colors";

export const semanticColors = {
    background:   {
        default: primitiveColors.white,
        subtle: primitiveColors.gray100 
    },
    text: {
        primary: primitiveColors.gray900,
        inverse: primitiveColors.white
    },
    brand:  {
        primary: primitiveColors.blue500,
        hover: primitiveColors.blue600
    }
} as const;