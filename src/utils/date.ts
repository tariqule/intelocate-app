import format from 'date-fns/format';


export function dateIsValid(input: Date): boolean {
    const isDate = Object.prototype.toString.call(input) === '[object Date]';
    const notNaN = !(isNaN(input.getTime()));
    return isDate && notNaN;
}

export const formatDate = format;

export function formatISODate(ISOdate: string): string {
    return formatDate(new Date(ISOdate), 'DD/MM/YYYY');
}
