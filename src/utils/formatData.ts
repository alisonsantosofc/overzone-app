import { getDate, getDay, getMonth, getYear } from 'date-fns';

interface FormatAmountDTO {
  lang: string;
  currency: string;
  amount: number;
}

export function formatAmount({ lang, currency, amount }: FormatAmountDTO) {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency,
  }).format(amount);
}

interface FormatDateDTO {
  lang: string;
  date: Date;
}

export function formatDate({ lang, date }: FormatDateDTO) {
  return new Intl.DateTimeFormat(lang).format(new Date(date));
}

export function formatToReleaseDate(date: Date) {
  const releaseDate = date.toLocaleDateString('pt-br', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return releaseDate;
}
