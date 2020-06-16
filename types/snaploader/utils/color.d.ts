export declare type ColorRGB = {
    r: number;
    g: number;
    b: number;
    a?: number;
};
export declare type ColorHSL = {
    h: number;
    s: number;
    l: number;
    a?: number;
};
/**
 * An integer representing a 32-bit encoded RGB(A) value.
 */
export declare type PackedColor = number;
export declare type Color = string | PackedColor;
export declare const cssStringToInt: (color: string, fallbackValue: PackedColor) => PackedColor;
export declare function intToCssString(value: PackedColor): string;
export declare function intToRgb(value: PackedColor, result?: ColorRGB): ColorRGB;
export declare function rgbToInt(color: ColorRGB): PackedColor;
export declare function rgbToHsl(color: ColorRGB, result?: ColorHSL): ColorHSL;
export declare const hslToRgb: (color: ColorHSL, result?: ColorRGB | undefined) => ColorRGB;
/**
 * Converts the provided value to a PackedColor i.e. an integer representation.
 *
 * @param value
 * @param defaultValue
 */
export declare function parseColor(value: Color | null | undefined, defaultValue: PackedColor): PackedColor;
