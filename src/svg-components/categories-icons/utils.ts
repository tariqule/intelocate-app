import { CategoryInput } from './types';


export function getCodeWithColor(input: CategoryInput): { code: number; color: string; } {
    return {
        code: input.code,
        color: input.color ? input.color : '#ffffff'
    };
}
