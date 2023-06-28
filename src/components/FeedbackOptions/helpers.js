export function getColorLable(lable) {
  switch (lable) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'blue';
    case 'bad':
      return 'red';
    default:
      return '';
  }
}
