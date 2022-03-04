import * as fs from "fs-extra"
import * as yaml from "js-yaml"
import { Manifest } from "./resolve"


interface Lock {
  [index: string]: {
    version: string,
    url: string,
    shasum: string,
    dependencies: { [dependency: string]: string}
  }
}



const oldLock: Lock = Object.create(null);

const newLock: Lock = Object.create(null);



export function updateOrCreate(name: string, info: object) {
  if (!newLock[name]) {
    newLock[name] = Object.assign(null);
  }


  Object.assign(newLock[name], info)
}


export function getItem(name: string, constraint: string) : Manifest | null {
  const item = oldLock[`${name}@${constraint}`]


  if (!item) null


  return {
    [item.version]: {
      dependencies: item.dependencies,
      dist: { shasum: item.shasum, tarball: item.url }
    }
  }
}



export async function writeFile () {
  await fs.writeFile("lpm.yml", yaml.safeDump())
}
