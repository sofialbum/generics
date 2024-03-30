// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);

const btn = document.querySelector<HTMLButtonElement>(".btn")!;


// function numberIdentity(item: number): number{
//   return item;
// }

// function stringIdentity(item: string): string{
//   return item;
// }

// function booleanIdentity(item: boolean): boolean{
//   return item;
// }

function identity<Type>(item: Type): Type {
  return item;
}

// identity<number>(7);
// identity<string>("hello");


function getRandomElement<T>(list: T[]): T{
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));

console.log(getRandomElement([1,2,3]));


function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  };
}

// const wrongExample = merge({ name: "colt"}, 9)

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });

console.log(comboObj);

function makeEmptyArray<T = number>(): T[] {
  return []
}

const numbers = makeEmptyArray();
const bools = makeEmptyArray<boolean>();


interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T){
    this.queue.push(el)
  }
}

const songs = new Playlist<Song>()

const videos = new Playlist<Video>()