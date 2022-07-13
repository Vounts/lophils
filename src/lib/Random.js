export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateEmail = (name) => {
  const split = name.toLowerCase().split(" ");
  return `${split[0]}@${split[1]}.com`;
};
